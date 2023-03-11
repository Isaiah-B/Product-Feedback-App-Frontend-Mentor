import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSetRecoilState } from 'recoil';

import { ModalState } from '../../recoil/store';
import { CommentType } from '../../types';
import { flattenComments } from '../../utils';

import { createReply } from '../../service/comment-service';

import {
  CommentItemContainer,
  CommentItemContent,
  CommentItemProfileImg,
  CommentItemTopRow,
  CommentItemTopRowLeft,
  CommentItemUser,
  CommentThreadContainer,
  CommentWrapperContainer,
  NewReplyButton,
  NewReplySection,
  PostReplyButton,
  PostReplyButtonWrapper,
  ReplyingToText,
  ReplyTextArea,
} from './comment-thread.styles';

interface CommentItemProps {
  comment: CommentType,
  isParent?: boolean,
}

function CommentItem({ comment, isParent = false }: CommentItemProps) {
  const setModalState = useSetRecoilState(ModalState);

  const navigate = useNavigate();
  const [replyOpen, setReplyOpen] = useState(false);
  const [replyText, setReplyText] = useState('');

  const hasReplies = comment.replies.length;
  const isReply = comment.replyingTo !== undefined;

  const submitReply = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const replyingTo = comment.user.username;

    const res = await createReply(replyText, replyingTo, comment._id);

    if (res.error) {
      setModalState({ action: 'reply', isOpen: true });
      return;
    }

    setReplyText('');
    setReplyOpen(false);

    navigate(0);
  };

  return (
    <CommentItemContainer
      className={`${isParent && hasReplies ? 'parent' : ''} ${isReply ? 'reply' : ''}`}
    >
      <CommentItemTopRow>
        <CommentItemTopRowLeft>
          <CommentItemProfileImg src={comment.user.image} />

          <CommentItemUser>
            <h4 id="name">{comment.user.name}</h4>
            <h4 id="username">{`@${comment.user.username}`}</h4>
          </CommentItemUser>
        </CommentItemTopRowLeft>

        <NewReplyButton
          buttonStyle="empty"
          onClick={() => setReplyOpen(!replyOpen)}
        >
          Reply
        </NewReplyButton>
      </CommentItemTopRow>

      <CommentItemContent>
        <ReplyingToText>{`${comment.replyingTo ? `@${comment.replyingTo} ` : ''}`}</ReplyingToText>
        <p>{comment.content}</p>

        {
          replyOpen
            ? (
              <NewReplySection onSubmit={(e) => submitReply(e)}>
                <ReplyTextArea
                  value={replyText}
                  onChange={({ target }) => setReplyText(target.value)}
                  maxLength={250}
                  required
                />

                <PostReplyButtonWrapper>
                  <PostReplyButton
                    buttonType="button1"
                    type="submit"
                  >
                    Post Reply
                  </PostReplyButton>
                </PostReplyButtonWrapper>
              </NewReplySection>
            )
            : null
        }
      </CommentItemContent>
    </CommentItemContainer>
  );
}

function CommentWrapper({ comment }: { comment: CommentType }) {
  const replies = flattenComments(comment.replies);

  return (
    <CommentWrapperContainer>
      <CommentItem comment={comment} isParent />
      {
        replies.length
          ? replies.map((reply) => (
            <CommentItem key={reply._id} comment={reply} />
          ))
          : null
      }
    </CommentWrapperContainer>
  );
}

function CommentThread({ comments }: { comments: CommentType[] }) {
  const numComments = flattenComments(comments).length;

  return (
    <CommentThreadContainer>
      <h3>{`${numComments} Comments`}</h3>
      {
        comments.map((comment) => (
          <CommentWrapper key={comment._id} comment={comment} />
        ))
      }
    </CommentThreadContainer>
  );
}

export default CommentThread;
