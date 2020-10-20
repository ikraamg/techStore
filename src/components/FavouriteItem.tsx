import React from 'react';
import PropTypes from 'prop-types';
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
import { star } from 'ionicons/icons';

interface ComponentProps {
  tech: {
    id: number;
    title: string;
    category: string;
    description: string;
    price: number;
  };
  handleFavourite: (arg0: number) => void;
}

const FavouriteItem: React.FC<ComponentProps> = ({ tech, handleFavourite }) => {
  const {
    id, title, category, description, price,
  } = tech;
  return (
    <IonCol sizeXs="12" sizeSm="6" sizeXl="4">
      <IonCard key={id}>
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
                onClick={() => handleFavourite(id)}
              >
                <IonIcon slot="start" md={star} />
                <IonText color="primary">Remove Favourite</IonText>
              </IonButton>
            </IonRow>
          </IonGrid>
        </IonCardContent>
      </IonCard>
    </IonCol>
  );
};

FavouriteItem.propTypes = {
  tech: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  handleFavourite: PropTypes.func.isRequired,
};

export default FavouriteItem;
