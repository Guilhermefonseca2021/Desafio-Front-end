import { useEffect } from "react"
import useFetchPosts from "../../hooks/useFetchPosts"
import Header from "../../components/Header"
import { CardBox, Container, HeaderBox } from "./styles"
import Card from "../../components/Card"

export default function Home() {
  useEffect(() => {
  }, []) 

  const { posts } = useFetchPosts()

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

          <input type="text" placeholder="Search the data" />
        </HeaderBox>
        <hr />

        <CardBox>
          {posts.map(post => {
            return(
              <Card key={post.id} title={post.title} />
            )
          })}
        </CardBox>
      </Container>
      
    </div>
  )
}
