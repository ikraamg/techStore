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

import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { loginUser } from '../helpers/auth';
import { request } from '../helpers/api';

import { toast } from '../helpers/toast';
import { setUser } from '../redux/actions/authActions';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

const Login: React.FC = () => {
  const [busy, setBusy] = useState<boolean>(false)
  const history = useHistory()
  const dispatch = useDispatch()
  // const token = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.JC6qKuH9SG0SIiYSfhZUFTtirxN9Q47buLk0DPFFFzE'
  const user = useSelector((state: RootStateOrAny) => state.auth.userData)
  const token = user ? user.token : ''
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  console.log(user)

  async function login() {
    setBusy(true)
    const response: any = await loginUser(username, password)
    console.log(response)
    if (!response.error) {
      dispatch(setUser(response))
      history.replace('/favourites')
      toast('You have logged in')
    } else{
      toast(response.error)
    }
    setBusy(false)
  }

  useEffect(() => {
    const autoUser = request(token, 'auto_login', 'GET', {}).then(data => {return data})
    if (!autoUser) {
      history.replace('/favourites')
    }
  }, [history, token])

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