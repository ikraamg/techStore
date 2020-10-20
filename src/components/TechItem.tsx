import React from 'react';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
  IonCol,
  IonGrid,
  IonRow,
  IonText,
} from '@ionic/react';
import { star, starOutline } from 'ionicons/icons';

interface ContainerProps {
  tech: any;
  handleFavourite: any;
  name: any;
}

const TechItem: React.FC<ContainerProps> = ({
  tech,
  handleFavourite,
  name,
}) => {
  const {
    id, title, category, description, price, favourite,
  } = tech;
  return (
    <IonCol sizeXs="12" sizeSm={name ? '12' : '6'} sizeXl={name ? '12' : '4'}>
      <IonCard
        key={id}
        button={!name}
        routerLink={name ? undefined : `/tech/${title}`}
      >
        <img
          alt="laptop"
          src={`https://source.unsplash.com/1600x900/?${title},${category}`}
        />
        <IonCardContent>
          <IonGrid>
            <IonRow className="ion-padding-bottom">
              <IonCol>
                <IonCardSubtitle>{category}</IonCardSubtitle>
                <IonCardTitle>{title}</IonCardTitle>
              </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-between ion-padding-bottom">
              <IonCol>
                <IonText>
                  {' '}
                  {description}
                  {' '}
                </IonText>
              </IonCol>
              <IonCol className="ion-text-right ion">
                <IonText color="dark">
                  R
                  {price}
                </IonText>
              </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center">
              <IonButton
                fill="outline"
                expand="full"
                onClick={e => handleFavourite(id, favourite, e)}
              >
                <IonIcon
                  slot="start"
                  md={favourite ? star : starOutline}
                />
                <IonText color="primary">
                  {favourite ? 'Remove ' : 'Add '}
                  {' '}
                  Favourite
                </IonText>
              </IonButton>
            </IonRow>
          </IonGrid>
        </IonCardContent>
      </IonCard>
    </IonCol>
  );
};

export default TechItem;
