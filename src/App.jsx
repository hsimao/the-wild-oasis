import styled from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import Button from './ui/Button'
import Input from './ui/Input'

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: red;
  color: #333333;
`

const StyledApp = styled.div`
  background-color: red;
`

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>Hello</H1>
        <Button>
          <span>hello</span>
        </Button>
        <Button>Btn2</Button>
        <Input />
      </StyledApp>
    </>
  )
}

export default App
