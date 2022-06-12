import styled, { css } from 'styled-components';

const Container = styled.div`
  overflow-x: hidden;

  min-height: 100vh;

  ${({ isDark }) => isDark && css`
    background-color: #eff0f3;
  `}
`;

export default {
  Container,
};
