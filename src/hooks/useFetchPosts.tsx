import axios from 'axios'
import { useState } from 'react'

interface Posts {
  id: number,
  title: string,
}

function useFetchPosts() {
  const [posts, setPosts] = useState<Posts[]>([])

  axios('https://jsonplaceholder.typicode.com/todos')
    .then(response => setPosts(response.data))

  return { posts }
} 

export default useFetchPosts