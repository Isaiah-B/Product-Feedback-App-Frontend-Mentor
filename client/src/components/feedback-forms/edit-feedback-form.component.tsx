import { useState, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import Button from '../Button/Button.component';
import DropdownMenu from '../dropdown-menu/dropdown-menu.component';
import NotFoundPage from '../../pages/not-found/not-found.page';
import InputValidationWrapper from '../input-validation-wrapper/input-validation-wrapper.component';
import { ReactComponent as EditFeedbackIcon } from '../../assets/shared/icon-edit-feedback.svg';

import useValidateForm from '../../hooks/useFormValidation';
import { CurrentUserState, FeedbackState } from '../../recoil/store';
import { CATEGORY_TYPES, FeedbackType } from '../../types';
import { deleteFeedback, editFeedback } from '../../service/feedback-service';

import {
  ButtonsRightJustify,
  ButtonsSpaceBetween,
  FeedbackFormContainer,
  FormDecoration,
  FormDropdownButton,
  FormDropdownWrapper,
  FormSection,
  FormSectionDescription,
  FormSectionTitle,
  FormTextInput,
  FormTitle,
} from './feedback-forms.styles';

function EditFeedbackForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [feedbackList, setFeedbackList] = useRecoilState(FeedbackState);
  const currentUser = useRecoilValue(CurrentUserState);

  const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);
  const [statusMenuOpen, setStatusMenuOpen] = useState(false);

  const feedback = feedbackList.find((item) => item._id === id);

  const [title, setTitle] = useState(feedback?.title || 'N/A');
  const [description, setDescription] = useState(feedback?.description || 'N/A');
  const [selectedCategory, setSelectedCategory] = useState(feedback?.category || 'N/A');
  const [selectedStatus, setSelectedStatus] = useState(feedback?.status || 'N/A');

  const statusList = ['suggestion', 'planned', 'in-progress', 'live'];

  const formValidateRef = useValidateForm();

  const categoryList = Object.values(CATEGORY_TYPES)
    .filter((value) => value !== 'all');

  const selectCategory = useCallback((category: string) => {
    setSelectedCategory(category);
    setCategoryMenuOpen(false);
  }, []);

  const selectStatus = useCallback((status: string) => {
    setSelectedStatus(status);
    setStatusMenuOpen(false);
  }, []);

  const onDeleteFeedback = async () => {
    if (feedback) {
      await deleteFeedback(feedback._id);
      setFeedbackList(feedbackList.filter((item) => item._id !== feedback._id));
      navigate('/');
    }
  };

  const submitEditFeedback = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const editedData = {
      title,
      category: selectedCategory,
      status: selectedStatus,
      description,
    };

    if (feedback) {
      const res = await editFeedback(feedback._id, editedData);

      if (res.error) return;

      const editedFeedback: FeedbackType = res.data;

      const updatedFeedbackList = feedbackList.map((item) => (
        item._id === editedFeedback._id
          ? editedFeedback
          : item
      ));

      setFeedbackList(updatedFeedbackList);
      navigate(-1);
    }
  };

  if (!feedback) return <NotFoundPage />;
  if (currentUser._id !== feedback.user) return <NotFoundPage />;

  return (
    <FeedbackFormContainer
      ref={formValidateRef}
      onSubmit={(e) => submitEditFeedback(e)}
    >
      <FormDecoration>
        <EditFeedbackIcon />
      </FormDecoration>

      <FormTitle>{`Editing '${feedback.title}'`}</FormTitle>

      <FormSection>
        <FormSectionTitle>Feedback Title</FormSectionTitle>

        <FormSectionDescription>
          Add a short, descriptive headline
        </FormSectionDescription>

        <InputValidationWrapper>
          <FormTextInput
            value={title}
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
            onClick={() => setCategoryMenuOpen(!categoryMenuOpen)}
          >
            {selectedCategory}
          </FormDropdownButton>
          {
            categoryMenuOpen
              ? (
                <DropdownMenu
                  items={categoryList}
                  selected={selectedCategory}
                  onClickOutside={() => setCategoryMenuOpen(false)}
                  handleSelect={selectCategory}
                />
              )
              : null
          }
        </FormDropdownWrapper>
      </FormSection>

      <FormSection>
        <FormSectionTitle>Update Status</FormSectionTitle>

        <FormSectionDescription>
          Change feedback state
        </FormSectionDescription>

        <FormDropdownWrapper>
          <FormDropdownButton
            type="button"
            onClick={() => setStatusMenuOpen(!statusMenuOpen)}
          >
            {selectedStatus}
          </FormDropdownButton>

          {
            statusMenuOpen
              ? (
                <DropdownMenu
                  items={statusList}
                  selected={selectedStatus}
                  onClickOutside={() => setStatusMenuOpen(false)}
                  handleSelect={selectStatus}
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
            value={description}
            onChange={({ target }) => setDescription(target.value)}
            rows={4}
            required
          />
        </InputValidationWrapper>
      </FormSection>

      <ButtonsSpaceBetween>
        <Button
          buttonType="button4"
          type="button"
          onClick={() => onDeleteFeedback()}
        >
          Delete
        </Button>

        <ButtonsRightJustify>
          <Button
            buttonType="button3"
            type="button"
            onClick={() => navigate(-1)}
          >
            Cancel
          </Button>

          <Button
            buttonType="button1"
            type="submit"
          >
            Save Changes
          </Button>
        </ButtonsRightJustify>
      </ButtonsSpaceBetween>
    </FeedbackFormContainer>
  );
}

export default EditFeedbackForm;
