import PropTypes from 'prop-types';


const Blog = ({blog}) => {
    const {title,cover,author_img,reading_time}=blog;
    return (
        <div>
            <img className='h-48' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <img src={author_img} alt="" />
                <p>{reading_time}min read</p>
            </div>
            <h3 className='text-4xl'>Blog:{title}</h3>
        </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object.isRequired
}
export default Blog;