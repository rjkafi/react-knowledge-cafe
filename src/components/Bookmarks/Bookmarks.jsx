import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    console.log(bookmarks)
    return (
        
        <div>
            <div className='bg-purple-50 p-4 mb-4 rounded-md'>
            <h3 className='text-purple-400 text-xl font-semibold'>Reading Time : {readingTime}</h3>
            </div>
            <div   className='bg-slate-200 p-4 rounded-md'>
            <h3 className='text-2xl font-bold'>Bookmarked Blogs: {bookmarks.length}</h3>
            {
               bookmarks.map( (bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>) 
            }
            </div>
           
           </div>
           
           
    );
};
Bookmarks.propTypes={
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number
   
}
export default Bookmarks;