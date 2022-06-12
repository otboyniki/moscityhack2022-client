import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;

  margin-right: -20px;
  margin-bottom: -26px;
  padding: 0;
`;

const ListItem = styled.li`
  list-style-type: none;

  margin-right: 20px;
  margin-bottom: 26px;

  width: calc((100% - 60px) / 3);

  @media screen and (max-width: 767px) {
    width: calc((100% - 40px) / 2);
  }

  @media screen and (max-width: 500px) {
    width: calc(100% - 20px);
  }
`;

const EmptyList = styled.div`

`;

export default {
  Container,
  List,
  ListItem,
  EmptyList,
};
