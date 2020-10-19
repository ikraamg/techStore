import { 
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from '@ionic/react';
import React from 'react';

const Home: React.FC = () => {

  return (
    <IonPage className= 'enableBg'>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='ion-text-center' >Welcome to Tech Explorer</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding ion-text-center enableBg" >
        <IonTitle style={{'marginTop':'10vh'}} className='ion-text-center' >Explore The Latest in Technology</IonTitle>
        <IonButton style={{'marginTop':'10vh', 'marginRight':'30px'}} routerLink="/login">Login</IonButton>
        <IonButton style={{'marginTop':'10vh'}} routerLink="/register" color="secondary">Register</IonButton>
      </IonContent>
    </IonPage>
  );
  
};

export default Home;