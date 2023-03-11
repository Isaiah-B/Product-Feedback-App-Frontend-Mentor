import { AxiosResponse } from 'axios';
import Api from './api';

const api = new Api();

export async function getAllFeedback() {
  const res = await api.get('/feedback');

  if (res.error) return res.error;
  return res;
}

export async function createFeedback({ title, description, category }: any) {
  const res = await api.post('/feedback', { title, description, category });
  return res;
}

export async function upvoteFeedback(feedbackId: string) {
  const res = await api.patch(`/feedback/upvote/${feedbackId}`);
  return res;
}

export async function editFeedback(feedbackId: string, data: unknown) {
  const res = await api.patch(`/feedback/${feedbackId}`, data);
  return res;
}

export async function deleteFeedback(feedbackId: string) {
  await api.delete(`/feedback/${feedbackId}`);
  return null;
}
