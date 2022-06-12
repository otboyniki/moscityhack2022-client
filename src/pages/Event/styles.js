import styled from 'styled-components';

const Sections = styled.div`
  display: flex;

  margin-bottom: 48px;
`;

const Section = styled.div`
  &:not(:last-child) {
    margin-right: 29px;
  }
`;

const Title = styled.div`
  margin-bottom: 36px;
`;

const Preview = styled.div`
  margin-bottom: 8px;
  width: 250px;

  img {
    display: block;

    width: 100%;
    height: 100%;
  }
`;

const Block = styled.div`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export default {
  Sections,
  Section,
  Title,
  Preview,
  Block,
};
