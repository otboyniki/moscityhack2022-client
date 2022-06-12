import styled from 'styled-components';

const Container = styled.div``;

const Title = styled.div`
  margin-bottom: 24px;
`;

const Tabs = styled.div`  
  display: flex;
`;

const Tab = styled.div`
  padding: 12px 24px;
`;

const Block = styled.div`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export default {
  Container,
  Title,
  Tabs,
  Tab,
  Block,
};
