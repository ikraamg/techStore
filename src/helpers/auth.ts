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

// Sample userData being stored
// userData:{
//   token: "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyfQ.68NcogyO1TlhZSp7ZzrgcaxSxTw6tedbiw-zuAUbubg",
//   user: {
//     admin: null,
//     created_at: "2020-10-14T17:53:56.288Z",
//     email: "test@gmail.com",
//     id: 2,
//     password_digest: "$2a$12$6hvr0aP41tw7Edv1k11Q2eU1ofkpZi0vXaGsmLVatqZg4.Ik3S4zy",
//     updated_at: "2020-10-14T17:53:56.288Z",
//     username: "test",
//   }
// }
