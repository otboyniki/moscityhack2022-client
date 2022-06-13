import { Link } from '@mui/material';
import styled from 'styled-components';

const ReviewPreviewCard = styled.div`
  width: 100%;
`;

const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const HeaderLeft = styled.div`
  display: flex;
  gap: 0 30px;
`;

const UserName = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 22px;
`;

const ReviewInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const EventLink = styled(Link)``;

const Rating = styled.div``;

const ReviewText = styled.div`
`;

export default {
  ReviewPreviewCard,
  ReviewHeader,
  HeaderLeft,
  UserName,
  ReviewInfo,
  EventLink,
  Rating,
  ReviewText,
};
