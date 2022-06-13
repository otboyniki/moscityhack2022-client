import styled from 'styled-components';

const Container = styled.div`
  justify-content: space-between;
  align-items: center;

  display: flex;

  width: 200px;
`;

const Block = styled.div`
  &:not(:last-child) {
    margin-right: 12px;
  }
`;

export default {
  Container,
  Block,
};
