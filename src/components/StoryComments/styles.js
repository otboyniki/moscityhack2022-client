import styled from 'styled-components';

const List = styled.ul`
  padding: 0;
`;

const Item = styled.li`
  list-style-type: none;

  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

export default {
  List,
  Item,
};
