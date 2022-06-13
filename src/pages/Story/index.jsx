import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Typography } from '@mui/material';

import { getStory } from '@/redux/story/actions';
import { getStoryBranch } from '@/redux/story/selectors';
import { getAuthBranch } from '@/redux/auth/selectors';

import AddStoryCommentForm from '@/components/AddStoryCommentForm';
import Header from '@/components/Header';
import StoryComments from '@/components/StoryComments';

import Container from '@/ui/Container';
import PageLayout from '@/ui/PageLayout';
import PageLoader from '@/ui/PageLoader';
import formatDate from '@/helpers/formatDate';

import S from './styles';

const Story = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { isAuthorized } = useSelector(getAuthBranch);

  const {
    data,
    isCommentAdded,
  } = useSelector(getStoryBranch);

  useEffect(() => {
    dispatch(getStory({ id }));
  }, [isCommentAdded]);

  const {
    title,
    date,
    description,
    fullName,
    comments,
  } = data || {};

  return (
    <>
      <Header />
      <PageLayout>
        <Container>
          {!data && (
            <PageLoader />
          )}
          {data && (
            <div>
              <S.Header>
                <S.Title>
                  <Typography component="h1" variant="body1">
                    {fullName}
                  </Typography>
                  <div>
                    {formatDate(date)}
                  </div>
                </S.Title>
                <Typography component="h1" variant="h4">
                  {title}
                </Typography>
              </S.Header>
              <S.Description>
                <div dangerouslySetInnerHTML={{ __html: description }} />
              </S.Description>
              <div>
                <S.CommentsTitle>
                  <Typography variant="h6">
                    {comments.length > 0 && (
                      <>
                        {comments.length}
                        {' '}
                        комментариев:
                      </>
                    )}
                    {comments.length === 0 && (
                      <>
                        Комментариев пока нет
                      </>
                    )}
                  </Typography>
                </S.CommentsTitle>
                {isAuthorized && (
                  <S.Form>
                    <AddStoryCommentForm />
                  </S.Form>
                )}
                <StoryComments />
              </div>
            </div>
          )}
        </Container>
      </PageLayout>
    </>
  );
};

export default Story;
