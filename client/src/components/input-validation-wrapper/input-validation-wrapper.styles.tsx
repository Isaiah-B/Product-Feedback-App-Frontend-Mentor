import styled from 'styled-components';

export const ValidationWrapper = styled.div`
`;

export const InvalidText = styled.h4`
  display: none;
  margin-top: 0.4rem;
  
  font-weight: 400;
  color: hsl(0, 67%, 53%);

  .submitted :invalid ~ & {
    display: block;
  }
`;
