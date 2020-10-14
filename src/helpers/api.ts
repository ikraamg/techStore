import { toast } from './toast';

export async function getRequest(token:string, path:string) {
  try {
  const  res = await fetch(`http://localhost:3000/${path}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Accept':'application/json',
      'Authorization':`Bearer ${token}`
    }
  })
  const response = await res.json()
  console.log(response)
  toast(response.message)
  return response
}
  catch(error){
    toast(error.message)
  }
}

export async function delRequest(token:string, path:string) {
  try {
  const  res = await fetch(`http://localhost:3000/${path}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Accept':'application/json',
      'Authorization':`Bearer ${token}`
    }
  })
  const response = await res.json()
  console.log(response)
  toast(response.message)
  return response
}
  catch(error){
    toast(error.message)
  }
}

export async function postRequest(token:string, path:string, body:object) {
  try {
    const  res = await fetch(`http://localhost:3000/${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Accept':'application/json',
        'Authorization':`Bearer ${token}`
      },
      body: JSON.stringify(body)
  })
    const response = await res.json()
    console.log(response)
    toast(response.message)
    return response
}
  catch(error){
    toast(error.message)
  }
}