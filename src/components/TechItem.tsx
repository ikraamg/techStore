import React from 'react';
import { IonButton, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonIcon, IonCol, IonGrid, IonRow, IonText } from '@ionic/react';
import { star, starOutline } from 'ionicons/icons';
import './TechItem.css';


interface ContainerProps {
  tech: any,
  handleFavourite: any
}

const TechItem: React.FC<ContainerProps> = ({tech, handleFavourite}) => {
  return (
    <IonCol sizeXs='12' sizeSm='6' sizeXl='4'>
      <IonCard key={tech.id}>
          <img alt='laptop' src={`https://source.unsplash.com/1600x900/?${tech.title},${tech.category}`} />
          <IonCardContent>
            <IonCardSubtitle>{tech.category}</IonCardSubtitle>
            <IonCardTitle>{tech.title}</IonCardTitle>
          </IonCardContent>
          <IonCardContent>
            <IonGrid>
              <IonRow className="ion-justify-content-between">
                <IonCol >
                  <IonText > {tech.description} </IonText>
                </IonCol>
                <IonCol className='ion-text-right ion'>
                  <IonText color='dark'>R{tech.price} </IonText>
                </IonCol>
              </IonRow>
            </IonGrid>
            <IonRow className='ion-justify-content-center'>
              <IonButton onClick={ () => handleFavourite(tech.id, tech.favourite)}> 
                <IonIcon slot='start' md={ tech.favourite ? star : starOutline }>
                </IonIcon> 
                  <IonText color='light'>
                    { tech.favourite ? 'Remove ' : 'Add ' } Favourite 
                  </IonText>
              </IonButton>
            </IonRow>
          </IonCardContent>
        </IonCard>
      </IonCol>
    );
};

export default TechItem;
