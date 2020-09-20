import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 700px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 auto;
  padding: 0 20px;
  @media (max-width: 1023px) {
    width: 500px;
  }
  @media (max-width: 767px) {
    width: 320px;
    padding: 0;
  }
  @media (max-width: 374px) {
    width: 250px;
  }
`;

export const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  font-style: italic;
  &:focus {
    border: 1px solid #ca8383;
    box-shadow: 0 0 3px .5px #d87777;
  }
`;
