import styled from 'styled-components';

import { MEDIA_SIZES } from '../../index.styles';

export const RoadmapListContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(22.3rem, 1fr) minmax(22.3rem, 1fr) minmax(22.3rem, 1fr);
  justify-content: space-between;
  column-gap: 3rem;
  width: 100%;

  @media ${MEDIA_SIZES.laptopS} {
    column-gap: 1rem;
  }

  @media (max-width: 48em) {
    display: none;
  }
`;
