import styled from 'styled-components';

import { MEDIA_SIZES } from '../../index.styles';

export const TagFilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;

  width: 100%;
  height: 16.6rem;
  padding: 2.4rem;
  border-radius: 10px;

  background-color: hsl(0, 0%, 100%);

  @media ${MEDIA_SIZES.laptopS} {
    height: auto;
    padding: 2.4rem 1.8rem 2.4rem 2.4rem;
  }

  @media ${MEDIA_SIZES.tablet} {
    padding: 1.6rem;
  }

  @media ${MEDIA_SIZES.mobileL} {
    width: 22.3rem;
  }
`;
