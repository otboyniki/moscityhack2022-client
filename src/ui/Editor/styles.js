import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid rgb(245, 245, 245);
  height: 100%;

  .public-DraftStyleDefault-ol, .public-DraftStyleDefault-ul {
    margin: 0;
  }
`;

const Toolbar = styled.div`
  display: flex;

  padding: 6px 8px 6px;

  background-color: rgb(245, 245, 245);
`;

const ToolbarButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  padding: 3px 5px;

  background-color: transparent;

  cursor: pointer;

  &:hover {
    background-color: #e5e5e5;
  }
`;

const ToolbarLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  padding: 3px 5px;

  background-color: transparent;

  cursor: pointer;

  &:hover {
    background-color: #e5e5e5;
  }

  input[type=file] {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
`;

const Editor = styled.div`
  padding: 20px;
`;

export default {
  Container,
  Toolbar,
  ToolbarButton,
  ToolbarLabel,
  Editor,
};
