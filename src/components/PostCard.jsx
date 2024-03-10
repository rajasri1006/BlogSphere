import React from 'react'
import {Link} from "react-router-dom"
import parse from "html-react-parser"
import appwriteService from "../appwrite/config.js"

function PostCard({
    $id, title, content,featuredImage,author
}) {
  return (
    <div className='md:px-4 sm:px-2'>
      <Link to={`/post/${$id}`}>
        <div
        className='w-[450%] bg-gray-50 rounded-xl p-4 flex justify-between shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'
        >
          <div className='w-full flex flex-col justify-center'>
          <h2 className='md:text-2xl sm:text-xl text-md font-Roboto font-semibold'>{title}</h2>
          <div style={{display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: '2', overflow: 'hidden'}}>
              {parse(content)}
            </div>
          <p className="text-gray-500 justify-left">{author ? author : "Anonymous"}</p>
          </div>
            <div
            className='w-1/2 flex justify-end mb-4 sm:ml-0 ml-4'
            >
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl w-40 h-24 object-contain'
                />
            </div>
        </div>
    </Link>
    </div>
  )
}

export default PostCard

