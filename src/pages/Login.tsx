import { 
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonLoading
} from '@ionic/react';

import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { loginUser } from '../helpers/auth';
import { getRequest, postRequest, delRequest } from '../helpers/api';

import { toast } from '../helpers/toast';
import { setUserState } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const Login: React.FC = () => {
  const [busy, setBusy] = useState<boolean>(false)
  const history = useHistory()
  const dispatch = useDispatch()
  // const token = useSelector(state => state.auth.user.token)
  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.JC6qKuH9SG0SIiYSfhZUFTtirxN9Q47buLk0DPFFFzE'
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function login() {
    setBusy(true)
    const response: any = await loginUser(username, password)
    console.log(response)
    if (!response.error) {
      dispatch(setUserState({username: response.user.username, token: response.token }))
      // history.replace('/tech')
      toast('You have logged in')
    } else{
      toast(response.error)
    }
    setBusy(false)
  }

  const newTech = {
    "tech":{
        "title":"API",
        "description":"helloooo",
        "category":"fish!",
        "price":20,
        "cost":30
    }}
  // const userFavourites = getRequest(token, 'user_favourites')
  // const teches = getRequest(token, 'teches')
  // const techItem = getRequest(token, 'teches/20')
  // const addTech = postRequest(token, 'teches', newTech)
  // const addFavourite = postRequest(token, 'favourites', {favourite:{tech_id: 20}})
  // const favouriteId = 7
  // const delFavourite = delRequest(token,`favourite/${favouriteId}`)
  // const autoLogin = getRequest(token, 'auto_login')




  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Logging in..." duration={0} isOpen={busy} />
      <IonContent className="ion-padding">
        <IonInput
          placeholder="Username?"
          onIonChange={(e: any) => setUsername(e.target.value)} />
        <IonInput
          type="password"
          placeholder="Password?"
          onIonChange={(e: any) => setPassword(e.target.value)} />
        <IonButton onClick={login}>Login</IonButton>

        <p>
          New here? <Link to="/register">Register</Link>
        </p>
      </IonContent>
    </IonPage>
  )
}

export default Login;