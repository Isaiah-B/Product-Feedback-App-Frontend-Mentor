import styled from 'styled-components';

import { MEDIA_SIZES } from '../../index.styles';

export const RoadmapHeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2.4rem 4rem 2.4rem 3.2rem;
  border-radius: 10px;
  background-color: hsl(230, 31%, 31%);

  @media (max-width: 48em) {
    border-radius: 0;
  }

  @media ${MEDIA_SIZES.mobileS} {
    padding: 2.4rem 2.6rem;
  }
`;

export const RoadmapHeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  button {
    padding: 0.3rem 0 !important;
    color: hsl(0, 0%, 100%);

    svg {
      stroke: hsl(231, 49%, 87%);
    }
  }

  h1 {
    color: hsl(0, 0%, 100%);
  }
`;
