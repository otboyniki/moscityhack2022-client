import React, { useState } from 'react';
import CommentIcon from '@mui/icons-material/Comment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StarIcon from '@mui/icons-material/Star';

import S from './styles';

const StoryMainList = () => {
  const [activeElementId, setActiveElementId] = useState('0');

  const handleClick = (event) => {
    setActiveElementId(event.currentTarget.id.toString());
  };

  return (
    <S.Container>
      <S.FullsizePreview>
        <S.FullsizeContent>
          <S.Date>12.06.2022</S.Date>
          <div>
            <S.Title>
              Всероссийский студенческий корпус спасателей проводит серию онлайн-семинаров
            </S.Title>
            <S.Statistics>
              <S.StatisticRow>
                <CommentIcon />
                25
              </S.StatisticRow>
              <S.StatisticRow>
                <VisibilityIcon />
                689
              </S.StatisticRow>
              <S.StatisticRow>
                <StarIcon />
                +323
              </S.StatisticRow>
            </S.Statistics>
          </div>

        </S.FullsizeContent>
      </S.FullsizePreview>

      <S.List>
        {
          Array.from('aserts').map((element, index) => (
            <S.ListItem
              key={`list-item-${index}`}
              id={index.toString()}
              isActive={index.toString() === activeElementId}
              onClick={handleClick}
            >
              <S.ListItemImage src="https://sun9-north.userapi.com/sun9-87/s/v1/ig2/EKDBu8vz-_aBtv9OJENIz9XOma-gYJusAOLNMQTunHkANc_nYyHGwh27us-suD01DzSKGgyGf5EKq_0UuMFQ7Yh0.jpg?size=604x453&quality=96&type=album" />
              <S.ListItemDescription>
                <S.ListItemTitle>Подготовка кинологических расчетов ПСС</S.ListItemTitle>
                <S.ListItemStatistics>
                  <S.StatisticRow>
                    <CommentIcon fontSize="inherit" />
                    25
                  </S.StatisticRow>
                  <S.StatisticRow>
                    <VisibilityIcon fontSize="inherit" />
                    689
                  </S.StatisticRow>
                  <S.StatisticRow>
                    <StarIcon fontSize="inherit" />
                    +323
                  </S.StatisticRow>
                </S.ListItemStatistics>
              </S.ListItemDescription>
            </S.ListItem>
          ))
        }
      </S.List>
    </S.Container>
  );
};

export default StoryMainList;
