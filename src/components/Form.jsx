import styled from "@emotion/styled";

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

&:hover{
    background-color: #7A7DFE;
    cursor: pointer;
}
`;

const Form = () => {
  return <form>

    <InputSubmit type="submit" value="Quote" />
    </form>;
};

export default Form;
