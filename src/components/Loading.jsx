import styled from "@emotion/styled";
import loadingSvg from "../img/loading.svg";

const Container = styled.div`
  text-align-last: center;
  margin-top: 30px;
`;

const Load = styled.img``;

const Loading = () => {
  return (
    <Container>
      <Load src={loadingSvg} alt="loading" />
    </Container>
  );
};

export default Loading;
