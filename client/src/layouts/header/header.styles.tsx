import styled from 'styled-components';

import { BodyM, MEDIA_SIZES } from '../../index.styles';

export const MobileHeaderWrapper = styled.div`
  &::before {
    content: '';
    display: none;

    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
  
    background-color: hsla(0, 0%, 0%, 0.5);
  }
  
  @media ${MEDIA_SIZES.mobileL} {
    &.menu-open::before {
      display: block;
    }
  }  
`;

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  
  width: 25.5rem;
  height: fit-content;

  @media ${MEDIA_SIZES.laptopS} {
    flex-direction: row;
    gap: 1rem;

    width: 100%;
    height: 17.8rem;
  }

  @media ${MEDIA_SIZES.mobileL} {
    position: absolute;
    top: 10rem;
    right: 0;
    z-index: 999;
    transform: translateX(100%);
    transition: all 0.3s;
    
    opacity: 0;
    pointer-events: none;
    visibility: hidden;

    flex-direction: column;
    align-items: flex-end;

    width: 27.2rem;
    height: 100%;
    padding: 2.4rem;
    background-color: hsl(230, 60%, 98%);

    .menu-open & {
      transform: translateX(0);
      right: 0;
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }
  }

  @media ${MEDIA_SIZES.mobileM} {
    top: 7.2rem;
  }
`;

export const HeaderImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: end;

  overflow: hidden;
  width: 100%;
  height: 13.7rem;
  padding: 2.4rem;
  border-radius: 10px;

  background-image: url(./assets/suggestions/desktop/background-header.png);
  background-size: cover;

  * { color: hsl(0, 0%, 100%) !important; }

  span { 
    ${BodyM};
    font-weight: 500;
    opacity: 0.75;
  }

  @media ${MEDIA_SIZES.laptopS} {
    height: auto;
    background-image: url(./assets/suggestions/tablet/background-header.png);
  }
  
  @media ${MEDIA_SIZES.mobileL} {
    display: none;
  }
`;
