import './App.css'
import { Main } from './pages/Main'
import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'

function App() {

  return (
    <Theme>
      <GlobalStyle />
      <Main />
    </Theme>
  )
}

export default App
