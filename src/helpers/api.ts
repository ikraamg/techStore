export default async function request(
  token = '',
  path = '/',
  method = 'GET',
  body: any = {},
) {
  try {
    const requestConfig = {
      method,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    if (method !== 'GET' && method !== 'DELETE') {
      Object.assign(requestConfig, { body: JSON.stringify(body) });
    }
    const res = await fetch(`http://localhost:3000/${path}`, requestConfig);
    const response = await res.json();
    return response;
  } catch (error) {
    const res = { error: 'Please check your internet connection' };
    return res;
  }
}
