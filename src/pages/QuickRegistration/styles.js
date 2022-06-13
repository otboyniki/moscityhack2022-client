import styled from 'styled-components';
import { Box, TextField } from '@mui/material';

const WrapperHalf = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 50px 40px;
`;

const Content = styled.div`
  display: flex;
`;

const RegistrationWrapper = styled(WrapperHalf)`
  background-color: #fffffe;
  color: #0d0d0d;
`;

const Title = styled.h1`
  margin-top: 0px;
  text-align: center;
  font-weight: 800;
  font-family: 'Montserrat', sans-serif;
`;

const FormBox = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const TextFieldWrapper = styled(TextField)`
  height: 90px;
`;

const Preview = styled.div`
  margin-bottom: 8px;
  width: 250px;

  img {
    display: block;

    width: 100%;
    height: 100%;
  }
`;

const Block = styled.div`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const Event = styled.div`
  margin-right: 48px;
`;

export default {
  Content,
  RegistrationWrapper,
  FormBox,
  Event,
  Title,
  TextFieldWrapper,
  Preview,
  Block,
};
