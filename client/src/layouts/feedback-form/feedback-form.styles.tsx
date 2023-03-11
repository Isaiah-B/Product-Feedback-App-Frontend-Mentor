import styled from 'styled-components';

import { MEDIA_SIZES } from '../../index.styles';

export const FeedbackFormLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6.8rem;

  @media ${MEDIA_SIZES.mobileL} {
    gap: 5.6rem;
  }
`;
