import styled from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import Button from './ui/Button'
import Input from './ui/Input'
import Heading from './ui/Heading'
import Row from './ui/Row'

const StyledApp = styled.div``

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">Hello h1</Heading>

            <div>
              <Heading as="h2">Hello H2</Heading>
              <Button>Primary medium</Button>
              <Button variation="secondary" size="small">
                Secondary small
              </Button>
            </div>
          </Row>

          <Row>
            <Heading as="h3">Hello h3</Heading>

            <form action="">
              <Input />
              <Button variation="secondary" size="small">
                Btn2
              </Button>
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  )
}

export default App
