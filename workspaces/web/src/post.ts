import request from './request';

export default function post(url: string, body?: any) {
  return request('post', url, { body });
}
