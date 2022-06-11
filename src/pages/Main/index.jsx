import React from 'react';

import PageLayout from '@/ui/PageLayout';
import Container from '@/ui/Container';
import Header from '@/components/Header';

const Main = () => (
  <>
    <Header />
    <PageLayout>
      <Container>
        <h1>Main</h1>
      </Container>
    </PageLayout>
  </>
);

export default Main;
