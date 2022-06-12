import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fffffe;
`;

const FullsizePreview = styled.div`
  position: relative;
  ${(props) => `
    background-image: url('${props.url}');
  `}
  background-size: cover;
  width: calc(100% - 390px);


  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    background: linear-gradient(180deg, rgba(13,13,13,0) 0%, rgba(13,13,13,0.9) 100%);
    width: 100%;
    height: 400px;
    z-index: 1;
  }
`;

const FullsizeContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 30px 40px;
  z-index: 5;
`;

const Date = styled.div`
  background-color: #ff8e3c;
  color: #ffffff;
  width: fit-content;
`;

const Title = styled.div`
  display: block;
  margin-bottom: 10px;
  color: #ffffff;
  font-size: 24px;
  font-weight: 500;
`;

const Statistics = styled.div`
  display: flex;
  color: #ffffff;
`;

const StatisticRow = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  gap: 0 5px;
`;

const List = styled.div`
  width: 390px;
  overflow-y: scroll;
`;

const ListItem = styled.div`
  display: flex;
  width: 100%;
  height: 110px;
  box-sizing: border-box;
  padding: 10px 15px;
  cursor: pointer;

  ${({ isActive }) => isActive && css`
        border-left: 5px solid #ff8e3c;
        padding: 10px 15px 10px 10px;
        background-color: #2a2a2a;
        color: #ffffff;
    `}
`;

const ListItemImage = styled.img`
  width: 110px;
  height: auto;
  box-sizing: border-box;
`;

const ListItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 0px 10px 0px 15px;
  box-sizing: border-box;
`;

const ListItemTitle = styled.div`
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 500;
`;

const ListItemStatistics = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
`;

export default {
  Container,
  FullsizePreview,
  FullsizeContent,
  Date,
  Title,
  Statistics,
  StatisticRow,
  List,
  ListItem,
  ListItemImage,
  ListItemDescription,
  ListItemTitle,
  ListItemStatistics,
};
