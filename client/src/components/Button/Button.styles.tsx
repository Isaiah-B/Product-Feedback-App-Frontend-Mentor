import styled, { css } from 'styled-components';

import { ReactComponent as ArrowLeftSVG } from '../../assets/shared/icon-arrow-left.svg';
import { MEDIA_SIZES } from '../../index.styles';

interface ButtonColorsIndex {
  [index: string]: any,
}

const BUTTON_COLORS: ButtonColorsIndex = {
  button1: {
    default: 'hsl(282, 83%, 52%)',
    hover: 'hsl(282, 90%, 66%)',
  },
  button2: {
    default: 'hsl(230, 76%, 59%)',
    hover: 'hsl(230, 91%, 73%)',
  },
  button3: {
    default: 'hsl(231, 33%, 34%)',
    hover: 'hsl(231, 26%, 52%)',
  },
  button4: {
    default: 'hsl(0, 67%, 53%)',
    hover: 'hsl(0, 69%, 72%)',
  },
  back: {
    default: 'hsl(230, 31%, 31%)',
    hover: 'hsl(230, 31%, 31%)',
  },
};

const ButtonBase = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  width: fit-content;
  padding: 1.2rem 2.4rem;
  border: none;
  background: none;
  border-radius: 10px;
  cursor: pointer;

  font-family: inherit;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 2rem;

  @media ${MEDIA_SIZES.mobileS} {
    font-size: 1.3rem;
    line-height: 1.9rem;

    padding: 1rem 1.6rem;
  }
`;

export const ButtonContainer = styled.button<{
  buttonType: string,
  isEmpty: boolean
}>`
  ${ButtonBase};

  color: ${(props) => (props.isEmpty ? 'hsl(224, 20%, 49%)' : 'hsl(0, 0%, 100%)')};
  background-color: ${(props) => (!props.isEmpty ? BUTTON_COLORS[props.buttonType].default : 'transparent')};
  
  &.back-button { padding: 1.2rem 0; }
  
  &:hover {
    background-color: ${(props) => (!props.isEmpty ? BUTTON_COLORS[props.buttonType].hover : 'transparent')};

    &.back-button {
      text-decoration: underline;
      opacity: 1;
    }
  }
`;

export const ArrowLeftIcon = styled(ArrowLeftSVG)`
  stroke: hsl(230, 76%, 59%);
`;
