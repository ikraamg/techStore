export async function request(token:string = '', path:string = '/', method:string = 'GET', body:object = {}) {
  try {
  const requestConfig = {
    method,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Accept':'application/json',
      'Authorization':`Bearer ${token}`
    },
  }
  if (method !== 'GET' && method !== 'DELETE'){
    Object.assign(requestConfig, {body: JSON.stringify(body)});
  }
  const  res = await fetch(`http://localhost:3000/${path}`, requestConfig)
  const response = await res.json()
  console.log("request -> response", response)
  return response
}
  catch(error){
    console.log(error)
    const res = {error: 'Please check your internet connection'}
    return res
  }
}