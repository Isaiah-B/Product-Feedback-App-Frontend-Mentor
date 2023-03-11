import styled, { createGlobalStyle, css } from 'styled-components';

import { ReactComponent as ArrowDownSVG } from './assets/shared/icon-arrow-down.svg';

export const MEDIA_SIZES = {
  laptopS: '(max-width: 57em)',
  tablet: '(max-width: 43em)',
  mobileL: '(max-width: 39em)',
  mobileM: '(max-width: 33em)',
  mobileS: '(max-width: 26em)',
};

export const BodyL = css`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.3rem;

  @media ${MEDIA_SIZES.mobileL} {
    font-size: 1.3rem;
    line-height: 1.9rem;
  }
`;

export const BodyM = css`
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2.2rem;

  @media ${MEDIA_SIZES.mobileL} {
    font-size: 1.3rem;
    line-height: 1.9rem;
  }
`;

export const BodyS = css`
  font-weight: 600;
  font-size: 1.3rem;
  line-height: 1.9rem;
`;

export const InputBase = css`
  ${BodyM};
  font-family: inherit;
  width: 100%;

  border: none;
  border-radius: 5px;
  background-color: hsl(230, 60%, 98%);
  cursor: pointer;

  &:focus, &:active {
    cursor: text;
    outline: 1px solid hsl(230, 76%, 59%);
  }

  .submitted &:invalid {
    border: 1px solid hsl(0, 67%, 53%);
    outline: none;
  }
`;

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;
    font-size: 62.5%;
    line-height: 1;
  }

  body {
    max-height: 100%;
    height: 100%;
    overflow-x: hidden;
    background-color: hsl(230, 60%, 98%);

    font-family: 'Jost', sans-serif;
    color: hsl(231, 33%, 34%);
  }

  #root {
    height: 100%;
  }
  
  h1 {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.5rem;
    letter-spacing: -0.33px;

    @media ${MEDIA_SIZES.mobileL} {
      font-size: 1.8rem;
      line-height: 2.6rem;
      letter-spacing: -0.25px;
    }
  }

  h2 {
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.9rem;
    letter-spacing: -0.25px;

    @media ${MEDIA_SIZES.mobileL} {
      font-size: 1.5rem;
      line-height: 2.1rem;
      letter-spacing: -0.19px;
    }
  }

  h3 {
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.6rem;
    letter-spacing: -0.25px;

    @media ${MEDIA_SIZES.mobileL} {
      font-size: 1.3rem;
      line-height: 1.9rem;
      letter-spacing: -0.18px;
    }
  }

  h4 {
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 2rem;
    letter-spacing: -0.2px;

    @media ${MEDIA_SIZES.mobileL} {
      font-size: 1.3rem;
      line-height: 1.9rem;
    }
  }
  
  p {
    ${BodyL};
    color: hsl(224, 20%, 49%);

    @media ${MEDIA_SIZES.mobileL} {
      font-size: 1.3rem;
      line-height: 1.9rem;
    }
  }
  
  textarea {
    ${InputBase};

    padding: 1.6rem 2.4rem;
    resize: none;
  }
`;

export const ArrowDownIcon = styled(ArrowDownSVG)`
  stroke: hsl(230, 76%, 59%);
`;
