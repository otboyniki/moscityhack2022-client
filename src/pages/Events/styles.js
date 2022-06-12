import styled from 'styled-components';

const Content = styled.div`
  justify-content: space-between;

  display: flex;

  @media screen and (max-width: 1300px) {
    flex-direction: column;
  }
`;

const Filter = styled.div`
  margin-right: 64px;
  width: 25%;
`;

const List = styled.div`
  width: 75%;

  @media screen and (max-width: 1300px) {
    width: 100%;
  }
`;

export default {
  Content,
  Filter,
  List,
};
