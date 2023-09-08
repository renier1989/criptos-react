const Results = ({quote}) => {

    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE, IMAGEURL} =  quote;
    console.log(quote);
  return <div>
    <p>Price : {PRICE}</p>
    <p>High Day : {HIGHDAY}</p>
    <p>Low Day : {LOWDAY}</p>
    <p>Change 24 hours : {CHANGEPCT24HOUR}</p>
    <p>Last Update : {LASTUPDATE}</p>
  </div>;
};

export default Results;
