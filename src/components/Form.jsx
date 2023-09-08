import styled from "@emotion/styled";
import useSelectCurrency from "../hooks/useSelectCurrency";
import { coins } from "../data/coins";
import { useEffect, useState } from "react";
import ErrorText from "./ErrorText";

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #ffffff;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 5px;
  font-size: 20px;
  transition: background-color 0.3s ease;
  margin-top: 20px;

  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

const Form = ({setCurrencies}) => {
  const [error, setError] = useState(false);
  const [cryptos, setCryptos] = useState([]);
  const [coin, SelectCurrency] = useSelectCurrency(
    "Select your Currency",
    coins
  );
  const [cryptoCurrency, SelectCryptoCurrency] = useSelectCurrency(
    "Select your Crypto",
    cryptos
  );

  useEffect(() => {
    const getCryptos = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const resp = await fetch(url);
      const result = await resp.json();

      const arrayCryptos = result.Data.map((crypto) => {
        const objCryptos = {
          id: crypto.CoinInfo.Name,
          name: crypto.CoinInfo.FullName,
        };
        return objCryptos;
        // console.log(cryto.CoinInfo);
      });

      setCryptos(arrayCryptos);
    };
    getCryptos();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([coin, cryptoCurrency].includes("")) {
      setError(true);
      return;
    }
    // console.log(coin, cryptoCurrency);
    setError(false);
    setCurrencies({
      coin,cryptoCurrency
    })
  };

  return (
    <>
      {error && <ErrorText>All Fields Required.</ErrorText>}
      <form onSubmit={handleSubmit}>
        <SelectCurrency />
        <SelectCryptoCurrency />
        <InputSubmit type="submit" value="Quote" />
      </form>
    </>
  );
};

export default Form;
