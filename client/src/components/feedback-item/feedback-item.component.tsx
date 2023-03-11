import { useRecoilState, useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

import { Tag } from '../tag/tag.component';
import UpvoteButton from '../upvote-button/upvote-button.component';
import { ReactComponent as CommentsIcon } from '../../assets/shared/icon-comments.svg';

import { flattenComments } from '../../utils';
import { upvoteFeedback } from '../../service/feedback-service';
import { FeedbackType } from '../../types';
import { CurrentUserState, FeedbackState, ModalState } from '../../recoil/store';

import {
  RoadmapStatus,
  RoadmapStatusCircle,
  FeedbackItemComments,
  FeedbackItemContainer,
  FeedbackItemDetails,
  FeedbackDescriptionWrapper,
} from './feedback-item.styles';

interface FeedbackItemProps {
  item: FeedbackType,
  disabled?: boolean,
  isCompact?: boolean,
  isRoadmap?: boolean,
  roadmapColor?: string,
}

function FeedbackItem({
  item,
  disabled = false,
  isCompact = false,
  isRoadmap = false,
  roadmapColor = 'hsl(14, 83%, 74%)',
}: FeedbackItemProps) {
  const navigate = useNavigate();

  const [feedbackState, setFeedbackState] = useRecoilState(FeedbackState);
  const [currentUser, setCurrentUser] = useRecoilState(CurrentUserState);
  const setModalState = useSetRecoilState(ModalState);

  let isUpvoted = false;
  if (currentUser.upvotes) {
    isUpvoted = currentUser.upvotes.includes(item._id);
  }

  const onClickFeedback = () => {
    if (disabled) return;

    navigate(`/${item._id}`);
  };

  const upvote = async (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();

    const res = await upvoteFeedback(item._id);

    if (res.error) {
      setModalState({ action: 'upvote', isOpen: true });
      return;
    }

    // Update user upvote list
    const userUpvoteList = currentUser.upvotes;
    let updatedUpvoteList;

    if (userUpvoteList && userUpvoteList.includes(item._id)) {
      updatedUpvoteList = [...userUpvoteList].filter((itemId) => itemId !== res.data._id);
    } else {
      updatedUpvoteList = [...userUpvoteList].concat(res.data._id);
    }

    setCurrentUser({ ...currentUser, upvotes: updatedUpvoteList });

    // Update feedback list
    const updatedFeedbackList = feedbackState.map(
      (feedback) => (feedback._id === item._id ? res.data : feedback),
    );

    setFeedbackState(updatedFeedbackList);
  };

  const disabledFlag = disabled ? 'disabled ' : '';
  const compactFlag = isCompact ? 'compact ' : '';
  const roadmapFlag = isRoadmap ? 'roadmap' : '';

  if (!item) return <h1>Loading...</h1>;

  return (
    <FeedbackItemContainer
      className={`${disabledFlag}${compactFlag}${roadmapFlag}`}
      onClick={() => onClickFeedback()}
      roadmapColor={roadmapColor}
    >
      <UpvoteButton
        upvotes={item.upvotes}
        isUpvoted={isUpvoted}
        onClick={(e) => upvote(e)}
      />

      <FeedbackItemDetails>
        {
          isRoadmap
            ? (
              <RoadmapStatus>
                <RoadmapStatusCircle roadmapColor={roadmapColor} />
                <p>{item.status.replace('-', ' ')}</p>
              </RoadmapStatus>
            )
            : null
        }
        <h3>{item.title}</h3>
        <FeedbackDescriptionWrapper>
          <p>{item.description}</p>
        </FeedbackDescriptionWrapper>
        <Tag type={item.category} />
      </FeedbackItemDetails>

      <FeedbackItemComments>
        <CommentsIcon />
        <span className={item.comments.length < 1 ? 'fade' : ''}>
          {flattenComments(item.comments).length}
        </span>
      </FeedbackItemComments>
    </FeedbackItemContainer>
  );
}

export default FeedbackItem;
