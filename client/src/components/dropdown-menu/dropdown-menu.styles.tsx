import styled from 'styled-components';

import { BodyL } from '../../index.styles';

export const DropdownMenuContainer = styled.ul`
  position: absolute;
  left: 0;
  top: 6.2rem;
  z-index: 999;

  display: flex;
  flex-direction: column;
  
  width: 25.5rem;
  list-style: none;
  border-radius: 10px;
  box-shadow: 0px 10px 40px -7px hsla(230, 31%, 31%, 0.35);
  background-color: hsl(0, 0%, 100%);
`;

export const DropdownMenuItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${BodyL};
  font-family: inherit;
  text-align: left;
  color: hsl(224, 20%, 49%);
  text-transform: capitalize;
  
  width: 100%;
  border: none;
  background: none;
  padding: 1.2rem 2.4rem;
  cursor: pointer;

  &:hover {
    color: hsl(282, 83%, 52%);
  }

  li:not(:last-child) & {
    border-bottom: 1px solid hsla(231, 33%, 34%, 0.15);
  }
`;
