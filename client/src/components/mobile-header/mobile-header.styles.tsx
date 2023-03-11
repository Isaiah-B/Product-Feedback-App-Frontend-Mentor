import styled from 'styled-components';

import { BodyM, MEDIA_SIZES } from '../../index.styles';

export const MobileHeaderContainer = styled.header`
  display: none;
  position: relative;
  z-index: 9999;
  
  width: 100%;
  height: 10rem;
  padding: 0 2.4rem;
  background-image: url(./assets/suggestions/mobile/background-header.png);
  background-size: cover;

  * { color: hsl(0, 0%, 100%) !important; }

  span { 
    ${BodyM};
    font-weight: 500;
    opacity: 0.75;
  }

  @media ${MEDIA_SIZES.mobileL} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media ${MEDIA_SIZES.mobileM} {
    height: 7.2rem;
  }
`;

export const MobileHeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const MobileMenuButton = styled.button`
  border: none;
  background: none;
`;
