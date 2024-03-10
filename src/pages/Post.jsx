import React, {useEffect, useState} from 'react'
import { Link, useNavigate, useParams} from "react-router-dom"

import appwriteService from "../appwrite/config"
import Button from "../components/Button"
import Container from "../components/container/Container"
import parse from "html-react-parser"
import {useSelector } from "react-redux"

function Post() {
  const [post, setPost] = useState(null)
  const {slug} = useParams()
  const navigate = useNavigate()
  const userData = useSelector((state) => state.auth.userData)
  const isAuthor = post && userData ? post.userId === userData.$id : false

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post)
        }else {
          navigate("/")
        }
      })
    }
  }, [slug, navigate])

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/my-posts")
      }
    })
  }
  return post ? (
    <div className="py-8">
      <Container>
        <div className='w-full max-w-[1200px] mx-auto flex justify-center mb-4 border rounded-xl p-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
          <img src={appwriteService.getFilePreview(post.featuredImage)} alt={post.title} className='rounded-xl' />
        </div>
        <p className="text-gray-600 ml-6 mb-4">Author: {post.author}</p>
        <div className="w-full mb-6 max-w-[1000px] mx-auto">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="browser-css">
            {parse(post.content)}
          </div>
        </div>
        { isAuthor && (
            <div className="flex items-center justify-center">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-green-500" className="mr-3">Edit</Button>
              </Link>
              <Button bgColor="bg-red-500" 
              onClick={deletePost}
              >Delete</Button>
            </div>
          )}
      </Container>
    </div>
  ) : (
    <div className="loader-container-allPosts">
      <div className="spinner-allPosts"></div>
  </div>
  )
}

export default Post