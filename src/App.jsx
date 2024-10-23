
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'



function App() {
const [bookmarks,setBookmarks]=useState([]);
const [readingTime,setReadingTime]=useState(0);
const handleAddToBookmark = blog =>{
  const newbookmarks=[...bookmarks,blog];
  setBookmarks(newbookmarks);
}
const handleReadingTime = (id,time) =>{
  const newReadingTime=readingTime +time ;
  setReadingTime(newReadingTime);
  // remove the book mark
  const remainingBookmarks=bookmarks.filter(bookmark => bookmark.id !==id)
  setBookmarks(remainingBookmarks);
 

}

  return (
    <>
     
      <Header></Header>
     <div className='md:flex  justify-center max-w-6xl m-auto gap-6 '>
    
     <Blogs 
     handleAddToBookmark={handleAddToBookmark}
     handleReadingTime={handleReadingTime}
     ></Blogs>
     <Bookmarks 
     bookmarks={bookmarks}
     readingTime={readingTime}
     ></Bookmarks>
     </div>
     
    </>
  )
}

export default App
