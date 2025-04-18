import React from 'react'
import Blogs from './Blog/Blogs'
import Articles from './Articles/Articles'
import ArticlesNavbar from './Articles/ArticlesNavbar'
export default function BlogArchivePage() {
    return (
        <div>
            <Blogs />
            <Articles />
            <ArticlesNavbar />
        </div>
    )
}
