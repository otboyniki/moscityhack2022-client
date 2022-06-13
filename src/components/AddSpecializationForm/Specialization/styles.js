import styled from 'styled-components';

const Block = styled.div`
  margin-bottom: 24px;
`;

const Text = styled.div`
  margin-bottom: 8px;
`;

const Counts = styled.div`  
  display: flex;
`;

const Count = styled.div` 
  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export default {
  Block,
  Text,
  Counts,
  Count,
};
