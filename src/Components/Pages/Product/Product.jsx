import React from 'react'
import HeaderProduct from './HeaderProduct'
import ActionSidebar from './ActionSidebar'
import CenterSectionProduct from './CenterSectionProduct'
import Blogs from './Blog/Blogs'
import Articles from './Articles/Articles'



export default function Product() {
  return (
    <div className='max-w-[1900px] mx-auto '>
      <HeaderProduct />,

      <ActionSidebar />,

      <Blogs />,
      <Articles />








    </div>


  )
}
