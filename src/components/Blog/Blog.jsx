import PropTypes from 'prop-types';
import { BsBookmarks } from "react-icons/bs";

const Blog = ({blog,handleAddToBookmark,handleReadingTime}) => {
    const {id,title,cover,author_img,reading_time,posted_date,author,hashtag}=blog;
    return (
        <div className='border-b mb-10'>
            <img className='w-full' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between p-4'>
                <div className='flex w-[250px]'>
                <img className='w-14 h-14' src={author_img} alt="" />
                <div className='ml-4'>
                    <h5 className='text-2xl font-bold'>{author}</h5>
                    <p className='text-gray-500 font-semibold'>{posted_date}</p>
                </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-2xl'><BsBookmarks></BsBookmarks></button>
                    </div>
             
            </div>
            <div className='mb-4 space-y-3'>
            <h3 className='text-4xl font-bold'>{title}</h3>
            <p><span><a href="">{hashtag}</a></span></p><br />
            <button onClick={() => handleReadingTime(id,reading_time)} className='text-purple-500 font-semibold underline'>Mark as read</button>
            </div>
           
        </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func.isRequired,
    handleReadingTime:PropTypes.func
    
}
export default Blog;