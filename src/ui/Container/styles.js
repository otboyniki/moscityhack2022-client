import styled from 'styled-components';

const Container = styled.div`
  max-width: 1100px;

  margin: 0 auto;
  padding: 57px 30px 192px;

  @media screen and (max-width: 767px) {
      padding: 28px 15px 56px;
  }
`;

export default {
  Container,
};
