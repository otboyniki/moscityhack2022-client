import styled from 'styled-components';

const EventsSection = styled.section`
  flex-wrap: wrap;

  display: flex;

  margin-right: -25px;
  margin-bottom: -25px;
`;

const Event = styled.div`
  margin-right: 25px;
  margin-bottom: 25px;
  width: calc((100% - 75px) / 3);
`;

const StoriesSection = styled.section`
  background-color: #eff0f3;
`;

const StoriesSectionContent = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 25px 25px;
  background-color: #eff0f3;
  max-width: 1100px;

  margin: 0 auto;
  padding: 57px 30px 192px;
`;

export default {
  Event,
  StoriesSection,
  StoriesSectionContent,
  EventsSection,
};
