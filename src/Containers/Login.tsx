import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonLoading,
  IonRow,
  IonGrid,
  IonCol,
} from '@ionic/react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../helpers/auth';

import toast from '../helpers/toast';
import { setUser } from '../redux/actions/authActions';

const Login: React.FC = () => {
  const [busy, setBusy] = useState<boolean>(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('test');
  const [password, setPassword] = useState('123456');

  const login = () => {
    setBusy(true);
    loginUser(username, password).then(user => {
      setBusy(false);
      if (user.error) {
        toast(user.error, 4000);
      } else {
        toast('Login successful');
        dispatch(setUser(user));
        history.push('/tech');
      }
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Logging in..." duration={0} isOpen={busy} />
      <IonContent className="ion-padding enableBg">
        <IonGrid style={{ marginTop: '5vh', }}>
          <IonRow className="ion-justify-content-center">
            <IonCol size="auto">
              <form>
                <IonInput
                  className="ion-padding ion-text-center"
                  placeholder="Username?"
                  onIonChange={(e: any) => setUsername(e.target.value)}
                />
                <IonInput
                  className="ion-padding ion-text-center"
                  type="password"
                  placeholder="Password?"
                  onIonChange={(e: any) => setPassword(e.target.value)}
                />
                <IonButton
                  expand="full"
                  className="ion-padding"
                  onClick={login}
                >
                  Login
                </IonButton>
                <p className="ion-padding ion-text-center">
                  New here?
                  {' '}
                  <Link to="/register">Register</Link>
                </p>
              </form>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
