import styled, { css } from 'styled-components';

const TagBase = css`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 600;
  font-size: 1.3rem;
  line-height: 1.9rem;
  text-transform: capitalize;
  color: hsl(230, 76%, 59%);

  width: fit-content;
  height: 3rem;
  border: none;
  border-radius: 10px;
  padding: 0.6rem 1.6rem;
  background-color: hsl(230, 100%, 97%);
`;

export const TagContainer = styled.div`
  ${TagBase};
`;

export const ButtonTagContainer = styled.button`
  ${TagBase};
  
  font-family: inherit;

  &:hover {
    cursor: pointer;
    background-color: hsl(230, 100%, 90%);
  }
  
  &.selected {
    color: hsl(0, 0%, 100%);
    background-color: hsl(230, 76%, 59%);
  }
`;
