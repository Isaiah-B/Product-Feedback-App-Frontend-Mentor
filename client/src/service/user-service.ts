import Api from './api';

const api = new Api();

export async function getUser() {
  const res = await api.get('/user');
  return res;
}

export async function createUser(name: string, username: string) {
  const res = await api.post('/auth/signup', { name, username });
  return res;
}
