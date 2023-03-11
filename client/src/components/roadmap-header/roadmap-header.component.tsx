import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import Button from '../Button/Button.component';

import { CurrentUserState, ModalState } from '../../recoil/store';

import { RoadmapHeaderContainer, RoadmapHeaderLeft } from './roadmap-header.styles';

function RoadmapHeader() {
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
    <RoadmapHeaderContainer>
      <RoadmapHeaderLeft>
        <Button
          buttonType="back"
          buttonStyle="empty"
          onClick={() => navigate('/')}
        >
          Go Back
        </Button>

        <h1>Roadmap</h1>
      </RoadmapHeaderLeft>

      <Button
        buttonType="button1"
        onClick={() => onClickAddFeedback()}
      >
        + Add Feedback
      </Button>
    </RoadmapHeaderContainer>
  );
}

export default RoadmapHeader;
