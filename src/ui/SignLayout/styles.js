import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const FullWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: rgba(0,0,0,0.2) 0px 2px 1px -1px,rgba(0,0,0,0.14) 0px 1px 1px 0px,rgba(0,0,0,0.12) 0px 1px 3px 0px;
`;

export default {
  FormContainer,
  FullWrapper,
};
