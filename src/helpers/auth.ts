import { toast } from './toast';


export async function loginUser(username: string, password: string) {
  const email = `${username}@yahoo.com`
  try {
    // const res = await firebase.auth().signInWithEmailAndPassword(email, password)
    const res = `logged in! ${email}`
    return res
  } catch(error) {
    toast(error.message, 4000)
    return false
  }
}