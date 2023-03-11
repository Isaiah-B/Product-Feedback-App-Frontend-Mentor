import Api from './api';

const api = new Api();

export async function createComment(content: string, feedbackId: string) {
  const res = await api.post(`/comment/${feedbackId}`, { content });
  return res;
}

export async function createReply(content: string, replyingTo: string, parentId: string) {
  const res = await api.post(`/comment/reply/${parentId}`, { content, replyingTo });
  return res;
}
