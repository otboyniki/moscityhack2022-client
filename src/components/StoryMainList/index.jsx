/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import CommentIcon from '@mui/icons-material/Comment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StarIcon from '@mui/icons-material/Star';

import { getStoriesBranch } from '@/redux/stories/selectors';

import formatDate from '@/helpers/formatDate';

import { BASE_URL } from '@/constants/env';
import { StoryTypes } from '@/constants/enums';

import S from './styles';
import routes from '@/constants/routes';

const StoryMainList = () => {
  const { items: stories } = useSelector(getStoriesBranch);
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const activeElementRef = useRef(null);

  const playClickHandler = () => {
    activeElementRef.current.play();
    setIsVideoPlaying(true);
  };

  const selectedStory = stories[activeStoryIndex];

  const Media = selectedStory.format === StoryTypes.Video
    ? 'video'
    : 'img';

  const MediaProps = selectedStory.format === StoryTypes.Video
    ? { controls: isVideoPlaying }
    : { alt: 'Preview' };

  return (
    <S.Container>
      <S.MediaContainer isVideoPlaying={isVideoPlaying}>
        <S.FullsizeMedia
          format={Media}
          as={Media}
          {...MediaProps}
          src={`${BASE_URL}/files/${selectedStory.previewId}`}
          ref={activeElementRef}
        />
        <S.FullsizeContent isVideoPlaying={isVideoPlaying}>
          {!isVideoPlaying && (
            <S.Date>{formatDate(selectedStory.date)}</S.Date>
          )}
          {selectedStory.format === StoryTypes.Video && !isVideoPlaying && (
            <S.PlayButton sx={{ fontSize: 90 }} onClick={playClickHandler} />
          )}
          <S.StoryDescription isVideoPlaying={isVideoPlaying}>
            <S.Title to={`${routes.stories}/${selectedStory.id}`} isVideoPlaying={isVideoPlaying}>
              {selectedStory.title}
            </S.Title>
            <S.Statistics>
              <S.StatisticRow>
                <CommentIcon />
                {selectedStory.commentsCount}
              </S.StatisticRow>
              <S.StatisticRow>
                <VisibilityIcon />
                {selectedStory.viewsCount}
              </S.StatisticRow>
              <S.StatisticRow>
                <StarIcon />
                {`${selectedStory.score > 0 ? `+${selectedStory.score}` : selectedStory.score}`}
              </S.StatisticRow>
            </S.Statistics>
          </S.StoryDescription>
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
            ? { controls: false }
            : { alt: 'Preview' };

          return (
            <S.ListItem
              key={id}
              id={id}
              isActive={activeStoryIndex === index}
              onClick={() => {
                setActiveStoryIndex(index);
                setIsVideoPlaying(false);
              }}
            >
              {format === StoryTypes.Video && <S.PlayButton sx={{ fontSize: 35 }} />}
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
                    {`${selectedStory.score > 0 ? `+${selectedStory.score}` : selectedStory.score}`}
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
