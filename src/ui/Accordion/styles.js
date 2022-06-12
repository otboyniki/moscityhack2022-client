import styled from 'styled-components';

const Title = styled.div`
  align-items: center;

  display: flex;

  margin-bottom: 12px;
  font-weight: 600;

  cursor: pointer;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;

  ${(props) => props.rotated && `
    transform: rotate(-180deg);
  `}
`;

export default {
  Title,
  Icon,
};
