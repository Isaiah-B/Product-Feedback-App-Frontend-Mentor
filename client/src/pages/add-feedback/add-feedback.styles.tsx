import styled from 'styled-components';

import { MEDIA_SIZES } from '../../index.styles';

export const AddFeedbackPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 6.8rem;

  width: 54rem;
  margin: 0 auto;
  padding: 5.6rem 0;

  @media ${MEDIA_SIZES.mobileL} {
    width: 90%;
    padding: 3.4rem 0 7.7rem;
  }
`;
