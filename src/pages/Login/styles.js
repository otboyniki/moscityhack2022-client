import styled from 'styled-components';
import { Box } from '@mui/material';

const WrapperHalf = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  box-sizing: border-box;
  padding: 50px 40px;
`;

const LoginWrapper = styled(WrapperHalf)`
  background-color: #fffffe;
  color: #0d0d0d;
`;

const RegistrationWrapper = styled(WrapperHalf)`
  color: #fffffe;
  background: linear-gradient(337deg, rgba(217,55,110,1) 0%, rgba(255,142,60,1) 100%);
`;

const Title = styled.h1`
  margin-top: 0px;
  text-align: center;
  font-weight: 800;
  font-family: 'Montserrat', sans-serif;
`;

const RegSubtitle = styled.div`
  margin-top: 15px;
  text-align: center;
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
`;

const FormBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 120px;
`;

export default {
  LoginWrapper,
  RegistrationWrapper,
  FormBox,
  Title,
  RegSubtitle,
};
