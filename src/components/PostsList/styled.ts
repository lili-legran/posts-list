import styled from 'styled-components';

export const StyledList = styled.div`
  width: 700px;
  padding: 20px 0;
  margin: 0 auto;
  @media (max-width: 1023px) {
    width: 500px;
  }
  @media (max-width: 767px) {
    width: 320px;
  }
  @media (max-width: 374px) {
    width: 250px;
  }
`;

export const StyledEmptyMessage = styled.div`
  width: 100%;
  font-size: 24px;
  margin: 50px 0;
  text-align: center;
`
