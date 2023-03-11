import styled from 'styled-components';

import { ReactComponent as SuggestionsSVG } from '../../assets/suggestions/icon-suggestions.svg';
import { ArrowDownIcon, MEDIA_SIZES } from '../../index.styles';

export const SuggestionsListHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 1.4rem 1.6rem 1.4rem 2.4rem;
  border-radius: 10px;
  background-color: hsl(230, 31%, 31%);

  @media ${MEDIA_SIZES.mobileL} {
    border-radius: 0;
  }
`;

export const ListHeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const SuggestionsIcon = styled(SuggestionsSVG)`
  margin-right: 1.6rem;

  @media ${MEDIA_SIZES.mobileL} {
    display: none;
  }
`;

export const NumOfSuggestions = styled.h3`
  margin-right: 3.8rem;
  color: hsl(0, 0%, 100%);

  @media ${MEDIA_SIZES.mobileL} {
    display: none;
  }
`;

export const SortDropdownWrapper = styled.div`
  position: relative;
`;

export const SortSuggestionsButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  
  border: none;
  background: none;
  cursor: pointer;

  font-family: inherit;
  color: hsl(230, 86%, 97%);

  & h4.regular {
    font-weight: 400;
  }

  div {
    * { display: inline; }
   }
`;

export const SortSuggestionsButtonArrow = styled(ArrowDownIcon)`
  stroke: hsl(0, 0%, 100%);
`;
