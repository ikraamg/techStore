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
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='ion-text-center' >Welcome to Tech Favourites</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding ion-text-center" >
        <IonTitle style={{'marginTop':'10vh'}} className='ion-text-center' >Enter Your Personal Technology Collection</IonTitle>
        <IonButton style={{'marginTop':'10vh', 'marginRight':'30px'}} routerLink="/login">Login</IonButton>
        <IonButton style={{'marginTop':'10vh'}} routerLink="/register" color="secondary">Register</IonButton>
      </IonContent>
    </IonPage>
  );
  
};

export default Home;