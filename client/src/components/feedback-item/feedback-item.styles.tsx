import styled from 'styled-components';

import { BodyL } from '../../index.styles';

export const FeedbackItemContainer = styled.div<{ roadmapColor: string }>`
  display: grid;
  grid-template-columns: 0fr 1fr auto;
  column-gap: 4rem;

  padding: 2.8rem 3.2rem;
  border-radius: 10px;
  background-color: hsl(0, 0%, 100%);
  cursor: pointer;

  &.disabled {
    cursor: default;
  }

  &.compact {
    grid-template-columns: 1fr 0fr;
    grid-template-rows: 1fr 0fr;
    align-items: center;
    column-gap: 0;
    row-gap: 1.6rem;
    
    width: 100%;

    & button {
      grid-column: 1;
      grid-row: 2;
    }
  }

  &.roadmap {
    position: relative;
    overflow: hidden;
    
    height: 27.2rem;
    border-radius: 5px;

    &:hover {
      h3 { color: hsl(230, 76%, 59%); }
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      z-index: 100;

      width: 100%;
      height: 0.6rem;
      background-color: ${(props) => props.roadmapColor};
    }

    @media (max-width: 64em) {
      height: 25.1rem;
      padding: 2rem 2.4rem 2rem 2.4rem;

      * {
        font-size: 1.3rem;
        line-height: 1.9rem;
      }
    }
  }
`;

export const RoadmapStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  
  text-transform: capitalize;
  margin-bottom: 0.8rem;
  
  p { margin-bottom: 0 !important; }

  @media (max-width: 64em) {
    margin-bottom: 1.4rem;
  }
`;

export const RoadmapStatusCircle = styled.div<{ roadmapColor: string }>`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: ${(props) => props.roadmapColor};
`;

export const FeedbackItemDetails = styled.div`  
  h3 { margin-bottom: 0.4rem; }

  .compact & {
    width: 100%;
    grid-column: 1 / -1;

    h3 {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

export const FeedbackDescriptionWrapper = styled.div`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 1.2rem;

  .compact & {
    -webkit-line-clamp: 2;
  }

  .roadmap & {
    @media (max-width: 64em) {
      margin-bottom: 2.4rem;
    }
  }
`;

export const FeedbackItemComments = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  span {
    ${BodyL};
    font-weight: 700;
    
    &.fade { 
      opacity: 0.5;
    }
  }

  .compact & {
    grid-row: 2;
  }
`;
