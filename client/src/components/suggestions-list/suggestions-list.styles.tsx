import styled from 'styled-components';

import { MEDIA_SIZES } from '../../index.styles';
import { FeedbackItemDetails } from '../feedback-item/feedback-item.styles';

export const SuggestionsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  ${FeedbackItemDetails} {
    h3 {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  @media ${MEDIA_SIZES.mobileL} {
    width: 91%;
    margin: 0 auto;
  }
`;

export const EmptySuggestionsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  width: 100%;
  height: 60rem;
  border-radius: 10px;
  background-color: hsl(0, 0%, 100%);

  @media ${MEDIA_SIZES.mobileL} {
    width: 90%;
  }
`;

export const EmptySuggestionsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: auto;
  text-align: center;
  width: 41rem;

  @media ${MEDIA_SIZES.mobileM} {
    width: 27.8rem;
  }

  svg {
    transform: scale(1.3);
    margin-bottom: 5.4rem;

    @media ${MEDIA_SIZES.mobileL} {
      transform: scale(1);
      margin-bottom: 4rem;
    }
  }

  h1 {
    margin-bottom: 1.6rem;

    @media ${MEDIA_SIZES.mobileL} {
      margin-bottom: 1.4rem;
    }
  }

  p {
    margin-bottom: 4.8rem;

    @media ${MEDIA_SIZES.mobileL} {
      margin-bottom: 2.4rem;
    }
  }
`;
