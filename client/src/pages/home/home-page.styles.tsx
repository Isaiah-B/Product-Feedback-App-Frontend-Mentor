import styled from 'styled-components';

import { MEDIA_SIZES } from '../../index.styles';

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 25.5rem auto;
  column-gap: 3rem;
  
  width: 111rem;
  margin: 0 auto;
  padding: 9.4rem 0;

  @media (max-width: 75em) {
    width: 95%;
  }

  @media ${MEDIA_SIZES.laptopS} {
    grid-template-columns: 1fr;
    row-gap: 4rem;
    
    width: 91%;
    padding: 5.6rem 0;
  }

  @media ${MEDIA_SIZES.mobileL} {
    width: 100%;
    padding-top: 0;
    row-gap: 0;
  }
`;
