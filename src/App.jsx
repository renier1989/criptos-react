import styled from "@emotion/styled";
import ImgCryto from "./img/imagen-criptos.png"

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
`;

const Heading = styled.h1`
  font-family: 'Lato' , sans-serif;
  color: #FFFFFF;
`;

const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

function App() {
  return (
    <Container>
      <Heading> mi pagina de criptomonedas</Heading>
    </Container>
  );
}

export default App;
