import React from 'react'
import HeaderProduct from './HeaderProduct'
import ActionSidebar from './ActionSidebar'
import Blogs from './Blog/Blogs'
import Articles from './Articles/Articles'
import ArticlesNavbar from './Articles/ArticlesNavbar'



export default function Product() {
  return (
    <div className='max-w-[1900px] mx-auto '>
      <HeaderProduct />,

      <ActionSidebar />,

      <Blogs />,
      <Articles />,
      <ArticlesNavbar />








    </div>


  )
}
