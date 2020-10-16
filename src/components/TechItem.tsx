import React from 'react';
import { IonButton, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonIcon, IonSlides, IonSlide, IonContent } from '@ionic/react';
import { star, starOutline } from 'ionicons/icons';
import './TechItem.css';


interface ContainerProps {
  tech: any,
  handleFavourite: any
}

const slideOpts = {
  initialSlide: 0,
  speed: 400
};

const TechItem: React.FC<ContainerProps> = ({tech, handleFavourite}) => {
  return (
    <IonCard key={tech.id}>
        {/* <img alt='mad' src="https://scontent-jnb1-1.xx.fbcdn.net/v/t31.0-8/1396939_377841179016599_1902197579_o.jpg?_nc_cat=104&_nc_sid=e3f864&_nc_ohc=MVdjGoPIrmAAX-_tsLQ&_nc_ht=scontent-jnb1-1.xx&oh=fa5ffbf10d32932f90b8b84955eea320&oe=5FAF305E" /> */}
        <IonSlides pager={true} options={slideOpts}>
          <IonSlide >
            <img alt='mad' src="https://scontent-jnb1-1.xx.fbcdn.net/v/t31.0-8/1396939_377841179016599_1902197579_o.jpg?_nc_cat=104&_nc_sid=e3f864&_nc_ohc=MVdjGoPIrmAAX-_tsLQ&_nc_ht=scontent-jnb1-1.xx&oh=fa5ffbf10d32932f90b8b84955eea320&oe=5FAF305E" />
          </IonSlide>
          <IonSlide >
            <img alt='mad' src="https://scontent-jnb1-1.xx.fbcdn.net/v/t31.0-8/1396939_377841179016599_1902197579_o.jpg?_nc_cat=104&_nc_sid=e3f864&_nc_ohc=MVdjGoPIrmAAX-_tsLQ&_nc_ht=scontent-jnb1-1.xx&oh=fa5ffbf10d32932f90b8b84955eea320&oe=5FAF305E" />
          </IonSlide>
          <IonSlide >
            <img alt='mad' src="https://scontent-jnb1-1.xx.fbcdn.net/v/t31.0-8/1396939_377841179016599_1902197579_o.jpg?_nc_cat=104&_nc_sid=e3f864&_nc_ohc=MVdjGoPIrmAAX-_tsLQ&_nc_ht=scontent-jnb1-1.xx&oh=fa5ffbf10d32932f90b8b84955eea320&oe=5FAF305E" />
          </IonSlide>
        </IonSlides>
        <IonCardContent>
          <IonCardSubtitle>{tech.category}</IonCardSubtitle>
          <IonCardTitle>{tech.title}</IonCardTitle>
        </IonCardContent>
        <IonCardContent>
          {tech.description}
        </IonCardContent>
      <IonButton onClick={ () => handleFavourite(tech.id, tech.favourite)}> 
        <IonIcon md={ tech.favourite ? star : starOutline }>
        </IonIcon>
      </IonButton>
      </IonCard>);
};

export default TechItem;
