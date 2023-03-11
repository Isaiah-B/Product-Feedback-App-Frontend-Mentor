import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { BodyL, BodyS, MEDIA_SIZES } from '../../index.styles';

export const RoadmapTabContainer = styled.div`
  width: 100%;
  height: 17.8rem;
  padding: 2.4rem;
  border-radius: 10px;
  background-color: hsl(0, 0%, 100%);

  @media ${MEDIA_SIZES.mobileL} {
    width: 22.3rem;
  }
`;

export const RoadmapTabHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 2.4rem;
`;

export const RoadmapTabLink = styled(Link)`
  ${BodyS};

  &:link,
  &:visited {
    color: hsl(230, 76%, 59%);
  }

  &:hover {
    color: hsl(230, 89%, 74%);
  }
`;

export const RoadmapListItemCircle = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
`;

export const RoadmapTabList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const RoadmapTabListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:nth-child(1) {
    ${RoadmapListItemCircle} { background-color: hsl(14, 83%, 74%); }
  }
  &:nth-child(2) {
    ${RoadmapListItemCircle} { background-color: hsl(282, 83%, 52%); }
  }
  &:nth-child(3) {
    ${RoadmapListItemCircle} { background-color: hsl(204, 94%, 68%); }
  }
`;

export const RoadmapListItemLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  span {
    ${BodyL};
  }
`;

export const RoadmapListItemCount = styled.span`
  ${BodyL};
  font-weight: 700;
  color: hsl(224, 20%, 49%);
`;
