import styled, { css } from 'styled-components';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  border-radius: 8px;
  background-color: #fffffe;
`;

const MediaContainer = styled.div`
  position: relative;
  width: calc(100% - 390px);
  border-radius: 8px 0 0 8px;
  overflow: hidden;

  ${({ isVideoPlaying }) => isVideoPlaying && css`
    overflow: visible;
  `}
`;

const FullsizeMedia = styled.div`
  width: 100%;
  height: 100%;
  object-fit: contain;
  overflow: hidden;
  border-radius: 8px 0 0 8px;
  
  ${({ format }) => format === 'img' && css`
    object-fit: cover;
  `}
`;

const FullsizeContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 30px 40px;
  bottom: 0px;
  z-index: 5;
  background: linear-gradient(180deg, rgba(13,13,13,0) 0%, rgba(13,13,13,0.9) 100%);

  ${({ isVideoPlaying }) => isVideoPlaying && css`
    background: none;
    height: 100px;
    bottom: -100px;
    padding: 10px 0px;
  `}
`;

const Date = styled.div`
  background-color: #ff8e3c;
  color: #ffffff;
  width: fit-content;
`;

const StoryDescription = styled.div`
  color: #ffffff;

  ${({ isVideoPlaying }) => isVideoPlaying && css`
    display: flex;
    align-items: center;
    color: #000000;
  `}
`;

const Title = styled.div`
  display: block;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 500;

  ${({ isVideoPlaying }) => isVideoPlaying && css`
    margin-bottom: 0;
    margin-right: 20px;
  `}
`;

const Statistics = styled.div`
  display: flex;
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
  position: relative;
  display: flex;
  width: 100%;
  height: 110px;
  box-sizing: border-box;
  padding: 10px 15px;
  cursor: pointer;

  ${({ isActive }) => isActive && css`
      &:before {
        content: '';
        position: absolute;
        width: 5px;
        height: 110px;
        background-color: #ff8e3c;
        left: 0;
        top: 0;
      }

      background-color: #2a2a2a;
      color: #ffffff;
    `}
`;

const PlayButton = styled(PlayCircleIcon)`
  position: absolute;
  top: 50%;
  left: calc(70px - 35px / 2);
  transform: translate(0, -50%);
  color: #eff0f3;
`;

const ListItemImage = styled.img`
  width: 110px;
  height: auto;
  object-fit: cover;
  box-sizing: border-box;
  flex-shrink: 0;
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
  height: 60px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 500;
  overflow: hidden;
`;

const ListItemStatistics = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
`;

export default {
  Container,
  MediaContainer,
  FullsizeMedia,
  FullsizeContent,
  PlayButton,
  Date,
  StoryDescription,
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
