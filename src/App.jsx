import styled from "@emotion/styled";
import ImageCrypto from "./img/imagen-criptos.png";
import Form from "./components/Form";
import { useEffect, useState } from "react";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    columns-gap: 2rem;
  }
`;

const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: #ffffff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after{
    content: '';
    width:100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`;

const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

function App() {
  const [currencies, setCurrencies] = useState({})
  useEffect(() => {
      if(Object.keys(currencies).length > 0){
        console.log(currencies);
      }
  }, [currencies]);
  return (
    <Container>
      <Image src={ImageCrypto} alt="ImageCryto" />
      <div>
        <Heading> Quote your cryptocurrencies instantly</Heading>
        <Form 
          setCurrencies={setCurrencies}
        />
      </div>
    </Container>
  );
}

export default App;
