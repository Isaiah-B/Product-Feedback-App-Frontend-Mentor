import EditFeedbackForm from '../../components/feedback-forms/edit-feedback-form.component';
import FeedbackFormLayout from '../../layouts/feedback-form/feedback-form.layout';

import { EditFeedbackPageContainer } from './edit-feedback.styles';

function EditFeedbackPage() {
  return (
    <EditFeedbackPageContainer>
      <FeedbackFormLayout FormComponent={<EditFeedbackForm />} />
    </EditFeedbackPageContainer>
  );
}

export default EditFeedbackPage;
