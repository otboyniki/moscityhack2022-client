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
`;

const TextFieldWrapper = styled(TextField)`
height: 90px;
`;

export default {
  RegistrationWrapper,
  FormBox,
  Title,
  TextFieldWrapper,
};
