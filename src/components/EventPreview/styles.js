import styled from 'styled-components';

const PreviewCard = styled.div`
  width: 100%;
  background-color: #eff0f3;
  border-radius: 0 0 8px 8px;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
`;

const Image = styled.img`
  display: block;
  object-fit: cover;
  height: 170px;
  width: 100%;
  border-radius: 8px 8px 0 0;
`;

const Text = styled.div`
  padding: 16px 16px 24px 16px;
`;

const Title = styled.div`
  margin-bottom: 10px;
  color: #0d0d0d;
  font-size: 18px;
  font-weight: 700;
`;

const Description = styled.div`
  display: flex;
  align-items: center;
  gap: 0 5px;
  margin-top: 5px;
  color: #2a2a2a;
  font-size: 14px;
  line-height: 1.5;
`;

export default {
  Image,
  Text,
  PreviewCard,
  Title,
  Description,
};
