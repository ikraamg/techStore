/* eslint-disable comma-dangle */
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
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import toast from '../helpers/toast';
import { registerUser } from '../helpers/auth';
import { setUser } from '../redux/actions/authActions';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [busy, setBusy] = useState<boolean>(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const register = () => {
    if (password !== cpassword) {
      return toast('Passwords do not match');
    }
    if (username.trim() === '' || password.trim() === '') {
      return toast('Username and password are required');
    }
    setBusy(true);
    registerUser(username, email, password).then(user => {
      setBusy(false);
      if (user.error) {
        toast(user.error, 4000);
      } else {
        toast('Registration successful');
        dispatch(setUser(user));
        localStorage.setItem('JWT', user.token);
        history.push('/tech');
      }
    });
    return true;
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Registering...Awaking Server ... May take up to 30 seconds" duration={0} isOpen={busy} />
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
                  placeholder="Email?"
                  onIonChange={(e: any) => setEmail(e.target.value)}
                />
                <IonInput
                  className="ion-padding ion-text-center"
                  type="password"
                  placeholder="Password?"
                  onIonChange={(e: any) => setPassword(e.target.value)}
                />
                <IonInput
                  className="ion-padding ion-text-center"
                  type="password"
                  placeholder="Confirm Password?"
                  onIonChange={(e: any) => setCPassword(e.target.value)}
                />
                <IonButton
                  expand="full"
                  className="ion-padding"
                  onClick={register}
                >
                  Register
                </IonButton>

                <p className="ion-padding ion-text-center">
                  Already have an account?
                  {' '}
                  <Link to="/login">Login</Link>
                </p>
              </form>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Register;
