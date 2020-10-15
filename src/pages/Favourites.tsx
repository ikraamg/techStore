import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

const Favourites: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{'Fav'}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={'Fav'} />
      </IonContent>
    </IonPage>
  );
};

export default Favourites;
