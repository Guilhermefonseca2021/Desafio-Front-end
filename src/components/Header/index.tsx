import logoImg from '../../assets/Icon.svg'
import { Container } from './styles'

export default function Header() {
  return (
    <Container>
      <img src={logoImg} alt="" />
      <h2>front end test</h2>
    </Container>
  )
}
