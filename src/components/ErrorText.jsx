import styled from "@emotion/styled"

const Error = styled.div`
background-color: #B7322C;
color: #FFFFFF;
padding: 15px;
font-size: 22px;
text-transform: uppercase;
font-family: 'Lato',sans-serif;
font-weight: 700;
text-align: center;
`;
const ErrorText = ({children}) => {
  return (
    <Error>{children}</Error>
  )
}

export default ErrorText