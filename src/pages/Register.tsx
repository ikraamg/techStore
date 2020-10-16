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
import { toast } from '../helpers/toast';
import { registerUser } from '../helpers/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/actions/authActions';


const Register: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [cpassword, setCPassword] = useState('')
  const [busy, setBusy] = useState<boolean>(false)
  const history = useHistory()
  const dispatch = useDispatch()

  const register = () => {
    if (password !== cpassword) {
      return toast('Passwords do not match')
    }
    if (username.trim() === '' || password.trim() === '') {
      return toast('Username and password are required')
    }

    setBusy(true)
    registerUser(username, email, password).then(user => {
      setBusy(false)
      if(user.error) {
        toast(user.error, 4000)
      } else {
        toast('Registration successful')
        dispatch(setUser(user))
        history.push('/favourites')
      }
    });    
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <IonLoading message="Registering..." duration={0} isOpen={busy}/>
        <IonInput
          placeholder="Username?"
          onIonChange={(e: any) => setUsername(e.target.value)}/>
        <IonInput
          placeholder="Email?"
          onIonChange={(e: any) => setEmail(e.target.value)}/>
        <IonInput
          type="password"
          placeholder="Password?"
          onIonChange={(e: any) => setPassword(e.target.value)}/>
        <IonInput
          type="password"
          placeholder="Confirm Password?"
          onIonChange={(e: any) => setCPassword(e.target.value)}/>
        <IonButton onClick={register}>Register</IonButton>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </IonContent>
    </IonPage>
  );
  
};

export default Register;