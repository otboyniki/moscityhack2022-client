/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CommentIcon from '@mui/icons-material/Comment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StarIcon from '@mui/icons-material/Star';

import { getStoriesBranch } from '@/redux/stories/selectors';

import formatDate from '@/helpers/formatDate';

import { BASE_URL } from '@/constants/env';
import { StoryTypes } from '@/constants/enums';
import routes from '@/constants/routes';

import S from './styles';

const StoryMainList = () => {
  const { items: stories } = useSelector(getStoriesBranch);

  const [activeStory, setActiveStory] = useState(0);

  const firstStory = stories[activeStory];

  const Media = firstStory.format === StoryTypes.Video
    ? 'video'
    : 'img';

  const MediaProps = firstStory.format === StoryTypes.Video
    ? { controls: true }
    : { alt: 'Preview' };

  return (
    <S.Container>
      <S.MediaContainer>
        <S.FullsizeMedia as={Media} {...MediaProps} src={`${BASE_URL}/files/${firstStory.previewId}`} />
        <S.FullsizeContent>
          <S.Date>{formatDate(firstStory.date)}</S.Date>
          <div>
            <S.Title to={`${routes.stories}/${firstStory.id}`}>
              {firstStory.title}
            </S.Title>
            <S.Statistics>
              <S.StatisticRow>
                <CommentIcon />
                {firstStory.commentsCount}
              </S.StatisticRow>
              <S.StatisticRow>
                <VisibilityIcon />
                {firstStory.viewsCount}
              </S.StatisticRow>
              <S.StatisticRow>
                <StarIcon />
                {`${firstStory.score > 0 ? `+${firstStory.score}` : firstStory.score}`}
              </S.StatisticRow>
            </S.Statistics>
          </div>
        </S.FullsizeContent>
      </S.MediaContainer>

      <S.List>
        {stories.map(({
          id,
          title,
          commentsCount,
          previewId,
          viewsCount,
          format,
        }, index) => {
          const Media = format === StoryTypes.Video
            ? 'video'
            : 'img';

          const MediaProps = format === StoryTypes.Video
            ? { controls: true }
            : { alt: 'Preview' };

          return (
            <S.ListItem
              key={id}
              id={id}
              isActive={activeStory === index}
              onClick={() => setActiveStory(index)}
            >
              <S.ListItemImage as={Media} {...MediaProps} src={`${BASE_URL}/files/${previewId}`} />
              <S.ListItemDescription>
                <S.ListItemTitle>{title}</S.ListItemTitle>
                <S.ListItemStatistics>
                  <S.StatisticRow>
                    <CommentIcon fontSize="inherit" />
                    {commentsCount}
                  </S.StatisticRow>
                  <S.StatisticRow>
                    <VisibilityIcon fontSize="inherit" />
                    {viewsCount}
                  </S.StatisticRow>
                  <S.StatisticRow>
                    <StarIcon fontSize="inherit" />
                    {`${firstStory.score > 0 ? `+${firstStory.score}` : firstStory.score}`}
                  </S.StatisticRow>
                </S.ListItemStatistics>
              </S.ListItemDescription>
            </S.ListItem>
          );
        })}
      </S.List>
    </S.Container>
  );
};

export default StoryMainList;
