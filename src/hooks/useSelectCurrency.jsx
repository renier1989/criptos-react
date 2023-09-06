import styled from "@emotion/styled";

const Label = styled.label`
color: #FFF;
`;

const useSelectCurrency = (label) => {
  const SelectCurrency = () => (
    <>
      <Label>{label}</Label>
    </>
  );

  return [SelectCurrency];
};

export default useSelectCurrency;
