import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';

import Button from '../Button/Button.component';
import InputValidationWrapper from '../input-validation-wrapper/input-validation-wrapper.component';

import { CurrentUserState, ModalState } from '../../recoil/store';
import { createUser } from '../../service/user-service';
import { ERROR_TYPES } from '../../types';

import {
  SignupInput,
  SignupModalContainer,
  ModalSection,
  ModalBackground,
  ModalSectionTitle,
  ModalButtonSection,
  DuplicateError,
} from './signup-modal.styles';
import useValidateForm from '../../hooks/useFormValidation';

function SignupModal() {
  const navigate = useNavigate();

  const setCurrentUser = useSetRecoilState(CurrentUserState);
  const [modalState, setModalState] = useRecoilState(ModalState);

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const formRef = useValidateForm();

  const closeModal = () => {
    setModalState({ action: '', isOpen: false });
  };

  const submitSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const res = await createUser(name, username);
    if (res.error) {
      setErrorMessage(res.error);
      return;
    }

    const { token, newUser } = res.data;

    localStorage.setItem('feedback-token', token);
    setCurrentUser(newUser);

    closeModal();
    navigate(0);
  };

  return (
    <ModalBackground>
      <SignupModalContainer
        ref={formRef}
        onSubmit={(e) => submitSignup(e)}
      >
        <h1>{`Sign up${modalState.action ? ` to ${modalState.action}!` : ''}`}</h1>

        <ModalSection>
          <ModalSectionTitle>Name</ModalSectionTitle>
          <InputValidationWrapper>
            <SignupInput
              value={name}
              onChange={({ target }) => setName(target.value)}
              required
            />
          </InputValidationWrapper>
        </ModalSection>

        <ModalSection>
          <ModalSectionTitle>Username</ModalSectionTitle>
          <InputValidationWrapper>
            <SignupInput
              value={username}
              onChange={({ target }) => setUsername(target.value)}
              required
            />
            {
              errorMessage.length
                ? <DuplicateError>{errorMessage}</DuplicateError>
                : null
            }
          </InputValidationWrapper>
        </ModalSection>

        <ModalButtonSection>
          <Button
            buttonType="button3"
            type="button"
            onClick={() => closeModal()}
          >
            Cancel
          </Button>

          <Button
            buttonType="button1"
            type="submit"
          >
            Sign up
          </Button>
        </ModalButtonSection>
      </SignupModalContainer>
    </ModalBackground>
  );
}

export default SignupModal;
