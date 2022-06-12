import styled from 'styled-components';
import { Box } from '@mui/material';

const FormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  transform: translateY(50%);
`;

const FullWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: rgba(0,0,0,0.2) 0px 2px 1px -1px,rgba(0,0,0,0.14) 0px 1px 1px 0px,rgba(0,0,0,0.12) 0px 1px 3px 0px;
`;

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
`;

const RegistrationWrapper = styled(WrapperHalf)`
  color: #fffffe;
  background: linear-gradient(337deg, rgba(217,55,110,1) 0%, rgba(255,142,60,1) 100%);
`;

const Title = styled.h1`
  margin-top: 0px;
  text-align: center;
  color: #0d0d0d;
  font-weight: 800;
  font-family: 'Montserrat', sans-serif;
`;

const RegTitle = styled.h1`
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
  FormContainer,
  FullWrapper,
  LoginWrapper,
  RegistrationWrapper,
  FormBox,
  Title,
  RegTitle,
  RegSubtitle,
};
