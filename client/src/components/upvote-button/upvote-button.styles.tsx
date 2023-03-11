import styled from 'styled-components';

import { ReactComponent as ArrowUpSVG } from '../../assets/shared/icon-arrow-up.svg';

import { BodyS, MEDIA_SIZES } from '../../index.styles';

export const UpvoteButtonContainer = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  width: 4rem;
  height: 5.3rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background-color: hsl(230, 86%, 97%);

  font-family: inherit;
  
  &:hover {
    background-color: hsl(230, 100%, 91%);
  }

  &.upvoted {
    background-color: hsl(230, 76%, 59%);
  }

  .compact & {
    flex-direction: row;
    gap: 0.8rem;

    padding: 1rem 1.6rem;
    width: max-content;
    height: 4rem;

    @media ${MEDIA_SIZES.mobileS} {
      height: 3.2rem;
      padding: 1rem 1.4rem;
    }
  }

  .roadmap & {
    @media (max-width: 64em) {
      height: 3.2rem;
      padding: 1rem 1.4rem;;
    }
  }
`;

export const ArrowUpIcon = styled(ArrowUpSVG)`
  stroke: hsl(230, 76%, 59%);

  .upvoted & {
    stroke: hsl(0, 0%, 100%);
  }
`;

export const UpvoteCount = styled.span`
  ${BodyS};
  font-weight: 700;
  color: hsl(231, 33%, 34%);

  .upvoted & {
    color: hsl(0, 0%, 100%);
    background-color: hsl(230, 76%, 59%);
  }
`;
