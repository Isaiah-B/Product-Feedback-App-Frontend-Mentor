import { useRecoilValue } from 'recoil';

import AddFeedbackForm from '../../components/feedback-forms/add-feedback-form.component';
import FeedbackFormLayout from '../../layouts/feedback-form/feedback-form.layout';
import NotFoundPage from '../not-found/not-found.page';

import { CurrentUserState } from '../../recoil/store';

import { AddFeedbackPageContainer } from './add-feedback.styles';

function AddFeedbackPage() {
  const currentUser = useRecoilValue(CurrentUserState);

  if (!currentUser._id) return <NotFoundPage />;

  return (
    <AddFeedbackPageContainer>
      <FeedbackFormLayout FormComponent={<AddFeedbackForm />} />
    </AddFeedbackPageContainer>
  );
}

export default AddFeedbackPage;
