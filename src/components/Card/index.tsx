import { Container, UserBoxImg } from "./styles";

interface Props {
    title: string,
}

export default function Card({ title }: Props) {
  return (
    <Container>
        <div>
            <UserBoxImg />
            <b>Annon:</b>
        </div>
        <p>{title}</p>
    </Container>
  )
}
