export default async function post(url: string, body?: any) {
  const response = await fetch(url, {
    method: 'post',
    body: JSON.stringify(body),
  });
  return response;
}
