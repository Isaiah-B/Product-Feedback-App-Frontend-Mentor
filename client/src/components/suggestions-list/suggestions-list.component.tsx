import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

import Button from '../Button/Button.component';
import FeedbackItem from '../feedback-item/feedback-item.component';
import { ReactComponent as EmptyIllustration } from '../../assets/suggestions/illustration-empty.svg';

import useScreenWidth from '../../hooks/useScreenWidth';

import {
  CurrentUserState,
  FeedbackState,
  FilteredSuggestions,
  ModalState,
} from '../../recoil/store';

import {
  EmptySuggestionsContent,
  EmptySuggestionsListContainer,
  SuggestionsListContainer,
} from './suggestions-list.styles';

function EmptyFeedbackScreen() {
  const navigate = useNavigate();
  const currentUser = useRecoilValue(CurrentUserState);
  const setModalState = useSetRecoilState(ModalState);

  const onClickAddFeedback = () => {
    if (currentUser._id) {
      navigate('/create-feedback');
    } else {
      setModalState({ action: 'add feedback', isOpen: true });
    }
  };

  return (
    <EmptySuggestionsListContainer>
      <EmptySuggestionsContent>
        <EmptyIllustration />

        <h1>There is not feedback yet.</h1>

        <p>
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </p>

        <Button
          buttonType="button1"
          onClick={() => onClickAddFeedback()}
        >
          + Add Feedback
        </Button>
      </EmptySuggestionsContent>
    </EmptySuggestionsListContainer>
  );
}

function SuggestionsList() {
  const feedbackList = useRecoilValue(FeedbackState);
  const filteredList = useRecoilValue(FilteredSuggestions);

  const screenWidth = useScreenWidth();

  const isCompact = screenWidth <= 528;

  if (feedbackList.length < 1) return <EmptyFeedbackScreen />;

  return (
    <SuggestionsListContainer>
      {
        filteredList.map((item) => (
          <FeedbackItem
            key={item._id}
            item={item}
            isCompact={isCompact}
          />
        ))
      }
    </SuggestionsListContainer>
  );
}

export default SuggestionsList;
