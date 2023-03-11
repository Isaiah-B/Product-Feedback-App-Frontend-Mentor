import { useState } from 'react';

import Button from '../Button/Button.component';
import InputValidationWrapper from '../input-validation-wrapper/input-validation-wrapper.component';

import useValidateForm from '../../hooks/useFormValidation';

import { AddCommentBottomRow, AddCommentContainer, CommentTextArea } from './add-comment-box.styles';

interface AddCommentBoxProps {
  handlePostComment: (e: React.FormEvent<HTMLFormElement>, content: string) => void,
}

function AddCommentBox({ handlePostComment }: AddCommentBoxProps) {
  const [commentText, setCommentText] = useState('');

  const formValidateRef = useValidateForm();

  const onChangeCommentText = (value: string) => {
    setCommentText(value);
  };

  const onSubmitAddComment = (e: React.FormEvent<HTMLFormElement>) => {
    formValidateRef.current?.classList.remove('submitted');
    setCommentText('');
    handlePostComment(e, commentText);
  };

  return (
    <AddCommentContainer
      ref={formValidateRef}
      onSubmit={onSubmitAddComment}
    >
      <h3>Add Comment</h3>

      <InputValidationWrapper>
        <CommentTextArea
          value={commentText}
          maxLength={250}
          placeholder="Type your comment here"
          onChange={({ target }) => onChangeCommentText(target.value)}
          required
        />
      </InputValidationWrapper>

      <AddCommentBottomRow>
        <span>{`${250 - commentText.length} Characters left`}</span>
        <Button
          buttonType="button1"
          type="submit"
        >
          Post Comment
        </Button>
      </AddCommentBottomRow>
    </AddCommentContainer>
  );
}

export default AddCommentBox;
