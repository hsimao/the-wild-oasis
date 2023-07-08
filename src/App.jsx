import styled from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import Button from './ui/Button'
import Input from './ui/Input'
import Heading from './ui/Heading'

const StyledApp = styled.div`
  background-color: red;
`

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">Hello h1</Heading>
        <Button>
          <span>hello</span>
        </Button>

        <Heading as="h2">Hello H2</Heading>
        <Heading as="h3">Hello h3</Heading>

        <Button>Btn2</Button>
        <Input />
      </StyledApp>
    </>
  )
}

export default App
