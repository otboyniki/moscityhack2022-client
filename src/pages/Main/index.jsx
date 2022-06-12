import React from 'react';

import PageLayout from '@/ui/PageLayout';
import Container from '@/ui/Container';
import Header from '@/components/Header';
import EventPreview from '@/components/EventPreview';
import StoryMainList from '@/components/StoryMainList';

import S from './styles';

const Main = () => (
  <>
    <Header />
    <PageLayout>
      <Container>
        <h1>Main</h1>
        <S.EventsSection>
          <EventPreview />
          <EventPreview />
          <EventPreview />
          <EventPreview />
        </S.EventsSection>
      </Container>

      <S.StoriesSection>
        <S.StoriesSectionContent>
          <StoryMainList />
        </S.StoriesSectionContent>
      </S.StoriesSection>
    </PageLayout>
  </>
);

export default Main;
