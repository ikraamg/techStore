import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

const Tech: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{'Tech'}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={'Tech'} />
      </IonContent>
    </IonPage>
  );
};

export default Tech;
