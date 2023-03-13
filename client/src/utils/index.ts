import { AxiosError } from 'axios';

import { CommentType, ERROR_TYPES } from '../types';

export const checkError = (err: unknown) => {
  if (err && err instanceof AxiosError) {
    let errType: string = err.response?.data.type;

    if (!errType) return { error: 'Error has no type' };

    errType = errType.toLowerCase();
    switch (true) {
      case errType === 'resource not found':
        return { error: ERROR_TYPES.RESOURCE_NOT_FOUND };
      case errType === 'user not found':
        return { error: ERROR_TYPES.USER_NOT_FOUND };
      case errType === 'not authorized':
        return { error: ERROR_TYPES.NOT_AUTHORIZED };
      case errType === 'duplicate username':
        return { error: ERROR_TYPES.DUPLICATE_USERNAME };
      default:
        return { error: errType };
    }
  }

  return { error: err };
};

/**
 * Transforms nested array of CommentType objects to a 1-dimensional array
 * @param comments - array of nested CommentType objects
 * @returns 1-dimensional list of comments and their replies
 */
export const flattenComments = (comments: CommentType[]) => {
  const commentsList: CommentType[] = [];

  const flattenReplies = (comment: CommentType, list: CommentType[]) => {
    list.push(comment);
    if (!comment.replies.length) return;

    comment.replies.forEach((reply) => {
      flattenReplies(reply, list);
    });
  };

  comments.forEach((comment) => flattenReplies(comment, commentsList));
  return commentsList;
};
