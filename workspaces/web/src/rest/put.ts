import request from './request';

export default function put(url: string, body?: any) {
  return request('put', url, body);
}
