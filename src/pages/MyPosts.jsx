import React, { useEffect, useState } from 'react'
import Container from '../components/container/Container'
import PostCard from "../components/PostCard"
import appwriteService from "../appwrite/config"
import { useSelector } from "react-redux"

function MyPosts() {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const userData = useSelector((state) => state.auth.userData)

  useEffect(() => {
    if (userData) {
      appwriteService.getPostsByUser(userData.$id).then((posts) => {
        if (posts) {
          setPosts(posts.documents)
        }
        setIsLoading(false)
      })
    }
  }, [userData])

  if (isLoading) {
    return (
      <div className='flex items-center justify-center mt-40 mb-40'>
        <div className="loader-container-allPosts">
        <div className="spinner-allPosts"></div>
      </div>
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <div className='w-full py-8'>
        <Container>
          <p className='text-2xl'>No posts to show....</p>
        </Container>
      </div>
    )
  }
  return (
    <div className='w-full py-8'>
      <Container>
        <div className="flex flex-wrap flex-col">
          {posts.map((post) => (
            <div className="p-2 w-1/4" key={post.$id}>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default MyPosts