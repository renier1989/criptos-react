import styled from "@emotion/styled";
import useSelectCurrency from "../hooks/useSelectCurrency";
import { coins } from "../data/coins";
import { useEffect, useState } from "react";

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
    const [cryptos ,setCryptos] = useState([]);
    const [coin,SelectCurrency] = useSelectCurrency('Select your Currency',coins );

    useEffect(()=>{
      const getCryptos = async()=>{
        const url= "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
        const resp = await fetch(url);
        const result = await resp.json();

        const arrayCryptos = result.Data.map(crypto => {
          const objCryptos = {
            id: crypto.CoinInfo.Name,
            name: crypto.CoinInfo.FullName
          }
          return objCryptos;
          // console.log(cryto.CoinInfo);
        })

        setCryptos(arrayCryptos);

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
