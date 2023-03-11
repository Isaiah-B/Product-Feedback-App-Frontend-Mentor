import styled from 'styled-components';

import { FeedbackDescriptionWrapper } from '../../components/feedback-item/feedback-item.styles';

import { MEDIA_SIZES } from '../../index.styles';

export const FeedbackPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  width: 73rem;
  margin: 0 auto;
  padding: 8rem 0 12.9rem 0;

  ${FeedbackDescriptionWrapper} {
    -webkit-line-clamp: initial;
  }

  @media (max-width: 52em) {
    width: 90%;
    padding: 5.6rem 0 12rem 0;
  }

  @media ${MEDIA_SIZES.mobileS} {
    padding: 2.4rem 0 8.8rem;
  }
`;

export const FeedbackPageHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
