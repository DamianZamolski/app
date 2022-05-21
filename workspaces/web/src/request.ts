type Method = 'get' | 'post' | 'put' | 'delete';

export default function request(method: Method, url: string, body?: any) {
  return fetch(url, { body: JSON.stringify(body), method });
}
