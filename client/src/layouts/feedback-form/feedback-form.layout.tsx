import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button/Button.component';

import { FeedbackFormLayoutContainer } from './feedback-form.styles';

function FeedbackFormLayout({ FormComponent }: { FormComponent: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <FeedbackFormLayoutContainer>
      <Button
        buttonType="back"
        buttonStyle="empty"
        onClick={() => navigate('/')}
      >
        Go Back
      </Button>

      {FormComponent}
    </FeedbackFormLayoutContainer>
  );
}

export default FeedbackFormLayout;
