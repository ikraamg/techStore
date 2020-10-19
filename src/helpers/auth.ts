export async function loginUser(username: string, password: string) {
  try {
    const res = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const response = await res.json();
    return response;
  } catch (error) {
    return { error: 'Please check your internet connection' };
  }
}

export async function registerUser(
  username: string,
  email: string,
  password: string,
) {
  try {
    const res = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });
    return await res.json();
  } catch (error) {
    const res = { error: 'Please check your internet connection' };
    return res;
  }
}
