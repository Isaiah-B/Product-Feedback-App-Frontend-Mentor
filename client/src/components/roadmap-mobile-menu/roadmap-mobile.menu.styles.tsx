import styled from 'styled-components';

export const RoadmapMobileMenuContainer = styled.div`
  position: relative;

  display: none;
  align-items: center;
  justify-content: space-around;

  margin-bottom: 2.4rem;
  border-bottom: 1px solid hsla(231, 20%, 63%, 0.25);

  @media (max-width: 48em) {
    display: flex;
  }
`;

export const MobileMenuSelector = styled.button`
  border: none;
  background: none;
  font-family: inherit;

  color: hsl(231, 33%, 34%);
  opacity: 0.4;

  padding: 2rem;

  &.selected {
    opacity: 1;
  }
`;

export const MobileMenuHighlight = styled.div<{ color: string }>`
  position: absolute;
  left: 0;
  bottom: 0;
  transition: all 0.3s;

  width: 21.1%;
  height: 0.4rem;
  background-color: ${(props) => props.color};

  ${MobileMenuSelector}:nth-child(1).selected ~ & {
    left: 6.4%;
  }

  ${MobileMenuSelector}:nth-child(2).selected ~ & {
    left: 42%;
  }

  ${MobileMenuSelector}:nth-child(3).selected ~ & {
    left: 75%;
  }
`;
