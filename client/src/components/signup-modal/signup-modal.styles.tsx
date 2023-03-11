import styled from 'styled-components';
import { InputBase } from '../../index.styles';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  
  background-color: hsla(0, 0%, 0%, 0.5);
`;

export const SignupModalContainer = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 38rem;
  padding: 2.4rem;
  border-radius: 5px;
  background-color: hsl(0, 0%, 100%);

  h1 { margin-bottom: 2.4rem; }
`;

export const ModalSection = styled.div`
  margin-bottom: 2.4rem;
`;

export const ModalSectionTitle = styled.h4`
  margin-bottom: 0.8rem;
`;

export const SignupInput = styled.input`
  ${InputBase};

  padding: 0.8rem;
`;

export const ModalButtonSection = styled.div`
  display: flex;
  justify-content: end;
  gap: 2.4rem;

  width: 100%;
`;

export const DuplicateError = styled.span`
  display: block;
  margin-top: 0.8rem;

  font-size: 1.3rem;
  color: hsl(0, 67%, 53%);
`;
