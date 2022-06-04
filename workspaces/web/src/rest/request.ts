type Method = 'get' | 'post' | 'put' | 'delete';

export default async function request(method: Method, url: string, body?: any) {
  return fetch(url, {
    body: JSON.stringify(body),
    method,
    headers: { 'Content-Type': 'application/json' },
  });
}
