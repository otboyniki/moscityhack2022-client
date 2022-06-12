import styled from 'styled-components';

const Container = styled.div``;

const Title = styled.div`
  align-items: center;
  
  display: flex;

  margin-bottom: 24px;
`;

const FilterIcon = styled.div`
  display: none;

  @media screen and (max-width: 1300px) {
    align-items: center;

    display: flex;

    margin-left: 8px;

    cursor: pointer;
  }
`;

const Form = styled.div`
  ${(props) => props.mobile && `
    padding: 30px;
  `}

  ${(props) => !props.mobile && `
    @media screen and (max-width: 1300px) {
      display: none;
    }
  `}
`;

export default {
  Container,
  Title,
  FilterIcon,
  Form,
};
