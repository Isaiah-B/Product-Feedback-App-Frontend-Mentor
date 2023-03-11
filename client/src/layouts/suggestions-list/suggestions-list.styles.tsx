import styled from 'styled-components';

import { MEDIA_SIZES } from '../../index.styles';

export const SuggestionsListLayoutContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media ${MEDIA_SIZES.mobileL} {
    gap: 3.2rem;
  }
`;
