import {Header} from "./Header.jsx"
import {Navigate} from "./Navigate.jsx"
import {ImageContainer} from "./ImageContainer.jsx"
import {Featured} from "./Featured.jsx"
import styled from "styled-components"

const Container = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
`
function App() {
  return (
     <Container>
      <Header/>
      <Navigate/>
      <ImageContainer/>
      <Featured/>
     </Container>
  )
}

export default App
