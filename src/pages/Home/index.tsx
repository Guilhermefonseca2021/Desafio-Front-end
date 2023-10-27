import useFetchPosts from "../../hooks/useFetchPosts"
import Header from "../../components/Header"
import { CardBox, Container, HeaderBox } from "./styles"
import Card from "../../components/Card"

export default function Home() {
  const { posts, search, handleSearch, filteredPosts } = useFetchPosts()

  return (
    <div>
      <Header />
      <Container>
        <HeaderBox>
          <div>
            <b>All posts service</b>
            <p>Ave.movie runtime: xxx min</p>
            <p>Ave.movie budget: $xxm</p>
          </div>

          <input type="text" value={search} placeholder="Search the data" onChange={handleSearch} />
        </HeaderBox>
        <hr />

        <CardBox>
          {
            search.length > 0 ? (
                filteredPosts.map(post => {
                  return(
                    <Card key={post.id} title={post.title} />
                  )
                })
            ) : (
                posts.map(post => {
                  return(
                    <Card key={post.id} title={post.title} />
                  )
                }) 
            )
          }
        </CardBox>
      </Container>
      
    </div>
  )
}
