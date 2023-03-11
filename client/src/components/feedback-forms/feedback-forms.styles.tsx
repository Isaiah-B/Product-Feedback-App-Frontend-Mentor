import styled from 'styled-components';

import { DropdownMenuContainer } from '../dropdown-menu/dropdown-menu.styles';
import { InputBase, MEDIA_SIZES } from '../../index.styles';

export const FeedbackFormContainer = styled.form`
  position: relative;

  width: 100%;
  padding: 5.2rem 4.2rem 4rem;
  border-radius: 10px;
  background-color: hsl(0, 0%, 100%);
`;

export const FormDecoration = styled.div`
  position: absolute;
  top: 0;
  left: 4.2rem;
  transform: translateY(-50%);
`;

export const FormTitle = styled.h1`
  margin-bottom: 4rem;
`;

export const FormSection = styled.div`
  margin-bottom: 2.4rem;
`;

export const FormSectionTitle = styled.h4`
  margin-bottom: 0.2rem;
`;

export const FormSectionDescription = styled.h4`
  font-weight: 400;
  color: hsl(224, 20%, 49%);

  margin-bottom: 1.6rem;
`;

export const FormTextInput = styled.input`
  ${InputBase};

  padding: 1.4rem 2.4rem;
`;

export const FormDropdownWrapper = styled.div`
  position: relative;

  ${DropdownMenuContainer} {
    width: 100%;
    top: 6.6rem;
  }
`;

export const FormDropdownButton = styled.button`
  ${InputBase};
  text-transform: capitalize;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.4rem 2.4rem;

  &:focus, &:active {
    cursor: pointer;
  }
`;

export const FormButtonsSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;

  padding-top: 0.8rem;
  
  @media ${MEDIA_SIZES.mobileM} {
    flex-direction: column-reverse;
    gap: 1.6rem;
    
    width: 100%;

    & button {
      width: 100%;
    }
  }
  

`;

export const ButtonsSpaceBetween = styled(FormButtonsSection)`
  justify-content: space-between;
`;

export const ButtonsRightJustify = styled(FormButtonsSection)`
  justify-content: end;
  gap: 1.6rem;

  padding-top: 0;
`;
