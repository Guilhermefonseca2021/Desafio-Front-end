import axios from 'axios';
import { useState, useEffect} from 'react';

interface Posts {
  id: number,
  title: string,
}

function useFetchPosts() {
  const [posts, setPosts] = useState<Posts[]>([])
  const [search, setSearch] = useState('')

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
  }
  
  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/todos')
    .then(response => setPosts(response.data))
  }, [])

  const filteredPosts = search.length > 0
    ? posts.filter(card => card.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    : [];

  return { posts, search, handleSearch, filteredPosts }
}

export default useFetchPosts