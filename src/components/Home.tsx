/* eslint-disable comma-dangle */
import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonLoading,
} from '@ionic/react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import request from '../helpers/api';
import toast from '../helpers/toast';
import { setUser } from '../redux/actions/authActions';

const Home: React.FC = () => {
  const [busy, setBusy] = useState<boolean>(false);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const JWT = localStorage.getItem('JWT');
    if (JWT) {
      setBusy(true);
      request(JWT, 'auto_login').then(user => {
        setBusy(false);
        if (user.error) {
          toast(user.error, 4000);
        } else {
          toast('Login successful');
          Object.assign(user, { token: JWT });
          dispatch(setUser(user));
          localStorage.setItem('JWT', user.token);
          history.push('/tech');
        }
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <IonPage className="enableBg">
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">
            Welcome to Tech Explorer
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Logging in...Awaking Server ... May take up to 30 seconds" duration={0} isOpen={busy} />

      <IonContent className="ion-padding ion-text-center enableBg">
        <IonTitle style={{ marginTop: '10vh', '--color': 'black', }} className="ion-text-center">
          Explore The Latest in Technology
        </IonTitle>
        <IonButton
          style={{ marginTop: '10vh', marginRight: '30px', }}
          routerLink="/login"
        >
          Login
        </IonButton>
        <IonButton
          style={{ marginTop: '10vh', }}
          routerLink="/register"
          color="secondary"
        >
          Register
        </IonButton>
      </IonContent>
    </IonPage>
  );
};
export default Home;
