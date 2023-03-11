import styled from 'styled-components';

export const RoadmapColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const RoadmapColumnHead = styled.div`
  text-transform: capitalize;

  h3 {
    font-size: 1.8rem;
    line-height: 2.6rem;
    letter-spacing: -0.25px;
  }
  
  @media (max-width: 64rem) {
    p {
      font-size: 1.4rem;
      line-height: 2rem;
    }
  }
`;

export const RoadmapColumnItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
