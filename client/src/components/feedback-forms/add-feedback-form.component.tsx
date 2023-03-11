import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import DropdownMenu from '../dropdown-menu/dropdown-menu.component';
import Button from '../Button/Button.component';
import InputValidationWrapper from '../input-validation-wrapper/input-validation-wrapper.component';
import { ReactComponent as NewFeedbackIcon } from '../../assets/shared/icon-new-feedback.svg';

import useValidateForm from '../../hooks/useFormValidation';
import { createFeedback } from '../../service/feedback-service';
import { CATEGORY_TYPES, FeedbackType } from '../../types';
import { FeedbackState } from '../../recoil/store';

import {
  ButtonsRightJustify,
  FeedbackFormContainer,
  FormButtonsSection,
  FormDecoration,
  FormDropdownButton,
  FormDropdownWrapper,
  FormSection,
  FormSectionDescription,
  FormSectionTitle,
  FormTextInput,
  FormTitle,
} from './feedback-forms.styles';

import { ArrowDownIcon } from '../../index.styles';

function AddFeedbackForm() {
  const navigate = useNavigate();

  const [feedbackList, setFeedbackList] = useRecoilState(FeedbackState);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('feature');

  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');

  const formValidateRef = useValidateForm();

  const dropdownItems = Object.values(CATEGORY_TYPES)
    .filter((value) => value !== 'all');

  const selectCategory = useCallback((itemName: string) => {
    setSelectedCategory(itemName);
    setDropdownOpen(false);
  }, []);

  const submitAddFeedback = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newFeedback = {
      title,
      description: detail,
      category: selectedCategory,
    };

    const res = await createFeedback(newFeedback);
    const createdFeedback: FeedbackType = res.data;
    setFeedbackList((feedbackList.concat(createdFeedback)));

    navigate('/');
  };

  return (
    <FeedbackFormContainer
      ref={formValidateRef}
      onSubmit={(e) => submitAddFeedback(e)}
    >
      <FormDecoration>
        <NewFeedbackIcon />
      </FormDecoration>

      <FormTitle>Create new Feedback</FormTitle>

      <FormSection>
        <FormSectionTitle>Feedback Title</FormSectionTitle>

        <FormSectionDescription>
          Add a short, descriptive headline
        </FormSectionDescription>

        <InputValidationWrapper>
          <FormTextInput
            onChange={({ target }) => setTitle(target.value)}
            required
          />
        </InputValidationWrapper>
      </FormSection>

      <FormSection>
        <FormSectionTitle>Category</FormSectionTitle>

        <FormSectionDescription>
          Choose a category for your feedback
        </FormSectionDescription>

        <FormDropdownWrapper>
          <FormDropdownButton
            type="button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {selectedCategory}
            <ArrowDownIcon />
          </FormDropdownButton>

          {
            dropdownOpen
              ? (
                <DropdownMenu
                  items={dropdownItems}
                  selected={selectedCategory}
                  onClickOutside={() => setDropdownOpen(false)}
                  handleSelect={selectCategory}
                />
              )
              : null
          }
        </FormDropdownWrapper>
      </FormSection>

      <FormSection>
        <FormSectionTitle>Feedback Detail</FormSectionTitle>
        <FormSectionDescription>
          Include any specific comments on what should be improved, added, etc.
        </FormSectionDescription>

        <InputValidationWrapper>
          <textarea
            rows={3}
            onChange={({ target }) => setDetail(target.value)}
            required
          />
        </InputValidationWrapper>
      </FormSection>

      <FormButtonsSection>
        <ButtonsRightJustify>
          <Button
            buttonType="button3"
            type="button"
            onClick={() => navigate('/')}
          >
            Cancel
          </Button>

          <Button
            buttonType="button1"
            type="submit"
          >
            Add Feedback
          </Button>
        </ButtonsRightJustify>
      </FormButtonsSection>
    </FeedbackFormContainer>
  );
}

export default AddFeedbackForm;
