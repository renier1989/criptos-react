import styled from "@emotion/styled";
import useSelectCurrency from "../hooks/useSelectCurrency";
import { coins } from "../data/coins";
import { useEffect } from "react";

const InputSubmit = styled.input`
background-color: #9497FF;
border: none;
width: 100%;
padding: 10px;
color: #FFFFFF;
font-weight: 700;
text-transform: uppercase;
border-radius : 5px;
font-size: 20px;
transition:  background-color .3s ease;
margin-top: 20px;

&:hover{
    background-color: #7A7DFE;
    cursor: pointer;
}
`;

const Form = () => {
  
    const [coin,SelectCurrency] = useSelectCurrency('Select your Currency',coins );

    useEffect(()=>{
      const getCryptos = async()=>{
        const url= "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
        const resp = await fetch(url);
        const result = await resp.json();
        console.log(result.Data);
      }
      getCryptos();

    },[])

  return <form>
    <SelectCurrency />
    {coin}
    <InputSubmit type="submit" value="Quote" />
    </form>;
};

export default Form;
