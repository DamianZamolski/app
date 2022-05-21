import request from './request';

export default function get(url: string) {
  return request('get', url);
}
