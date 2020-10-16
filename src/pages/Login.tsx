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

import { toast } from '../helpers/toast';
import { setUser } from '../redux/actions/authActions';
import { useDispatch } from 'react-redux';

const Login: React.FC = () => {
  const [busy, setBusy] = useState<boolean>(false)
  const history = useHistory()
  const dispatch = useDispatch()
  const [username, setUsername] = useState('test')
  const [password, setPassword] = useState('123456')

  const login = () => {
    setBusy(true)
    loginUser(username, password).then(user => {
      setBusy(false)
      if(user.error) {
        toast(user.error, 4000)
      } else {
        toast('Login successful')
        dispatch(setUser(user))
        history.push('/favourites')
      }
    });    
  }

  // useEffect(() => {
  //   const autoUser = request(token, 'auto_login', 'GET', {}).then(data => {return data})
  //   if (!autoUser) {
  //     history.replace('/tech')
  //   }
  //   //eslint-disable-next-line
  // }, [])

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