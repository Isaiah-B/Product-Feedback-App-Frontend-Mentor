import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import Button from '../../components/Button/Button.component';
import FeedbackItem from '../../components/feedback-item/feedback-item.component';
import CommentThread from '../../components/comment-thread/comment-thread.component';
import AddCommentBox from '../../components/add-comment-box/add-comment-box.component';
import NotFoundPage from '../not-found/not-found.page';

import { CommentType, FeedbackType } from '../../types';
import { CurrentUserState, FeedbackState, ModalState } from '../../recoil/store';
import { createComment } from '../../service/comment-service';
import useScreenWidth from '../../hooks/useScreenWidth';

import { FeedbackPageContainer, FeedbackPageHead } from './feedback-page.styles';

function FeedbackPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const screenWidth = useScreenWidth();

  const [loading, setLoading] = useState(false);
  const [feedbackList, setFeedbackList] = useRecoilState(FeedbackState);
  const currentUser = useRecoilValue(CurrentUserState);
  const setModalState = useSetRecoilState(ModalState);

  const isMobile = screenWidth <= 425;

  const feedback = feedbackList.find((item) => item._id === id) as FeedbackType;

  // Ensure we stay within the app when clicking the 'Go Back' button
  const gobackPage = feedback?.status === 'suggestion' ? '/' : '/roadmap';

  const postComment = async (e: React.FormEvent<HTMLFormElement>, content: string) => {
    e.preventDefault();

    if (!feedback) return;

    const res = await createComment(content, feedback._id);

    if (res.error) {
      setModalState({ action: 'comment', isOpen: true });
      return;
    }

    const newComment: CommentType = res.data;
    const updatedFeedback = { ...feedback, comments: feedback.comments.concat(newComment) };

    const updatedFeedbackList = feedbackList.map(
      (item) => (
        item._id === feedback._id
          ? updatedFeedback
          : item
      ),
    );

    setFeedbackList(updatedFeedbackList);
  };

  const onClickEditFeedback = () => {
    // check if user owns feedback
    if (currentUser) {
      navigate(`/edit-feedback/${feedback?._id}`);
    }
  };

  useEffect(() => {
    if (!feedback && !feedbackList.length) setLoading(true);
    else setLoading(false);
  }, [feedback, feedbackList]);

  if (loading) return <h1>Loading...</h1>;
  if (!feedback && feedbackList) return <NotFoundPage />;

  return (
    <FeedbackPageContainer>
      <FeedbackPageHead>
        <Button
          buttonType="back"
          buttonStyle="empty"
          onClick={() => navigate(gobackPage)}
          style={{ padding: '1.2rem 0' }}
        >
          Go Back
        </Button>

        {
          feedback.user === currentUser._id
            ? (
              <Button
                buttonType="button2"
                onClick={() => onClickEditFeedback()}
              >
                Edit Feedback
              </Button>
            )
            : null
        }
      </FeedbackPageHead>

      <FeedbackItem item={feedback} isCompact={isMobile} disabled />

      <CommentThread comments={feedback.comments} />

      <AddCommentBox handlePostComment={postComment} />
    </FeedbackPageContainer>
  );
}

export default FeedbackPage;
