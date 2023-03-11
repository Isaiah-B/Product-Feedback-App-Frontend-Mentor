import styled from 'styled-components';

export const RoadmapPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  
  width: 111rem;
  margin: 0 auto;
  padding: 7.8rem 0 17.9rem;

  @media (max-width: 75em) {
    width: 95%;
  }

  @media (max-width: 57em) {
    padding: 5.6rem 0 9.5rem;
  }

  @media (max-width: 49em) {
    width: 92%;
  }

  @media (max-width: 48em) {
    width: 100%;
    padding: 0 0 9.5rem;

    gap: 0;
  }
`;

export const RoadmapMobileColumnWrapper = styled.div`
  display: none;
  margin: 0 auto;

  @media (max-width: 48em) {
    display: block;
    width: 78%;
  }
`;
