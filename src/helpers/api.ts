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
    const res = await fetch(`https://tech-store-rails.herokuapp.com/${path}`, requestConfig);
    const response = await res.json();
    return response;
  } catch (error) {
    const res = { error: 'Please check your internet connection' };
    return res;
  }
}

// Example Requests to backend:
// const newTech = {
//   "tech":{
//       "title":"API",
//       "description":"helloooo",
//       "category":"fish!",
//       "price":20,
//       "cost":30
//   }}
// const userFavourites = request(token, 'user_favourites')
// const teches = request(token, 'teches')
// const techItem = request(token, 'teches/20', 'GET', {})
// const addTech = request(token, 'teches', 'POST', newTech)
// const addFavourite = request(token, 'favourites', 'POST', {favourite:{tech_id: 20}})
// const favouriteId = 6
// const delFavourite = request(token,`favourite/${favouriteId}`, 'DELETE', {})
// const autoLogin = request(token, 'auto_login', 'GET', {})

// useEffect(() => {
//   const autoUser = request(token, 'auto_login', 'GET', {}).then(data => {return data})
//   if (!autoUser) {
//     history.replace('/tech')
//   }
//   //eslint-disable-next-line
// }, [])
