import styled from 'styled-components';

import Button from '../Button/Button.component';

import { BodyM, MEDIA_SIZES } from '../../index.styles';

export const CommentThreadContainer = styled.div`
  padding: 2.4rem 3.2rem 2.4rem 3.2rem;
  border-radius: 10px;
  background-color: hsl(0, 0%, 100%);

  h3 { margin-bottom: 2.8rem }
`;

export const CommentWrapperContainer = styled.div`
  margin-bottom: 3.2rem;
  border-bottom: 1px solid hsla(231, 20%, 63%, 0.25);

  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
  }
`;

export const CommentItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  &:last-child { margin-bottom: 1.6rem }

  &.reply {
    margin-left: 2rem;
    padding-left: 2.4rem;
    border-left: 1px solid hsla(224, 20%, 49%, 0.1);

    &:last-child {
      margin-bottom: 1.6rem;
      padding-bottom: 0;
      border-left: none;
    }
  }
`;

export const CommentItemTopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  ${CommentItemContainer}.reply:last-child &::before {
    content: '';
    position: absolute;
    background-color: hsla(224, 20%, 49%, 0.1);
    height: 50%;
    width: 1px;
    top: 0;
    left: -2.4rem;
  }
`;

export const CommentItemTopRowLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;
`;

export const CommentItemProfileImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;

export const CommentItemUser = styled.div`
  #name { font-weight: 700; }
  #username {
    font-weight: 600;
    color: hsl(224, 20%, 49%);
  }
`;

export const NewReplyButton = styled(Button)`
  color: hsl(230, 76%, 59%) !important;

  &:hover {
    text-decoration: underline;
  }
`;

export const ReplyingToText = styled.span`
  display: inline;

  ${BodyM};
  font-weight: 700;
  color: hsl(282, 83%, 52%);
`;

export const CommentItemContent = styled.div`
  margin-left: 2rem;
  padding-left: 5.2rem;
  padding-bottom: 1.6rem;

  .parent & { padding-bottom: 3.2rem }

  .parent:not(.reply) & {
    border-left: 1px solid hsla(224, 20%, 49%, 0.1);
  }

  ${CommentItemContainer}.reply:last-child &{
    padding-bottom: 1.6rem;
  }
  
  p {
    ${BodyM};
    display: inline;
    color: hsl(224, 20%, 49%);
  }
`;

export const NewReplySection = styled.form`
  display: flex;
  gap: 1.6rem;

  padding-top: 2.4rem;

  @media ${MEDIA_SIZES.mobileM} {
    flex-direction: column;
  }
`;

export const ReplyTextArea = styled.textarea`
  width: 78%;
  color: hsl(231, 33%, 34%);

  @media ${MEDIA_SIZES.mobileM} {
    width: 100%;
  }

  .reply & {
    width: 76%;

    @media ${MEDIA_SIZES.mobileM} {
      width: 100%;
    }
  }
`;

export const PostReplyButtonWrapper = styled.div`
  display: flex;
  flex-shrink: 0;

  @media ${MEDIA_SIZES.mobileM} {
    justify-content: end;
  }
`;

export const PostReplyButton = styled(Button)`
  height: 58%;
  font-weight: 600;
`;
