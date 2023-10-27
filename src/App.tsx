import { ThemeProvider } from 'styled-components'
import './App.css'
import Home from './pages/Home'
import theme from './theme/theme'

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </>
  )
}

export default App
