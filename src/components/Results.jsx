import styled from "@emotion/styled";

const Result = styled.div`
  color: #ffff;
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`;

const Text = styled.p`
  font-size: 18px;
  span: {
    font-weight: 700;
  }
`;

const Price = styled.p`
  font-size: 24px;
  span: {
    font-weight: 700;
  }
`;

const Image = styled.img`
display: block;
width: 120px;

`;

const Results = ({ quote }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE, IMAGEURL } =
    quote;
  console.log(quote);
  return (
    <Result>
      <Image src={`https://cryptocompare.com/${IMAGEURL}`} alt="image-crypto" />
      <div>
        <Price>
          Price : <span>{PRICE}</span>
        </Price>
        <Text>
          High Day : <span>{HIGHDAY}</span>
        </Text>
        <Text>
          Low Day : <span>{LOWDAY}</span>
        </Text>
        <Text>
          Change 24 hours : <span>{CHANGEPCT24HOUR}</span>
        </Text>
        <Text>
          Last Update : <span>{LASTUPDATE}</span>
        </Text>
      </div>
    </Result>
  );
};

export default Results;
