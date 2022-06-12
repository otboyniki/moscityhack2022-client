import { Link } from '@mui/material';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px 40px;

  margin: 0 auto;
  padding: 30px 30px;
  max-width: 1280px;
  width: 100%;
`;

const Links = styled.div`
  display: flex;

  justify-content: space-between;
`;

const Buttons = styled.div`
  align-items: center;

  display: flex;
`;

const CustomLink = styled(Link)`
  &:not(:last-child) {
    margin-right: 12px;
  }
`;

const Name = styled.div`
  margin-right: 12px;
`;

export default {
  Container,
  Links,
  CustomLink,
  Buttons,
  Name,
};
