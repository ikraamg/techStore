import { IonButton, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonLoading, IonPage, IonTitle, IonToolbar, useIonViewWillEnter, IonMenuButton, IonButtons } from '@ionic/react';
import React, { useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { request } from '../helpers/api';
import { toast } from '../helpers/toast';
import { setFavourites } from '../redux/actions/dataActions';
import './Page.css';

const Favourites: React.FC = () => {
  const dispatch = useDispatch()
  const [busy, setBusy] = useState<boolean>(false)
  const user = useSelector((state: RootStateOrAny) => state.auth.userData)
  const {token} = user ? user : ''
  const favourites = useSelector((state: RootStateOrAny) => state.data.favourites)
  const store = useSelector((state: RootStateOrAny) => state)
  console.log("Tech:React.FC -> store", store)


  useIonViewWillEnter(() =>{
    setBusy(true);
    const favReq = request(token, 'user_favourites');

    Promise.all([favReq])
      .then((data) => {        
        setBusy(false)
        if(data[0].error) {
          toast(user.error, 4000)
        } else {
          dispatch(setFavourites(data[0]))
        }
      });
  })

    // const handleRemove = (fav_id:number) => request(token, `favourites/${fav_id}`, 'DELETE')



  const techItems = favourites ? favourites.map((tech:any) => {
    return ( 
      <IonCard key={tech.id}>
        {/* <img alt='mad' src="https://scontent-jnb1-1.xx.fbcdn.net/v/t31.0-8/1396939_377841179016599_1902197579_o.jpg?_nc_cat=104&_nc_sid=e3f864&_nc_ohc=MVdjGoPIrmAAX-_tsLQ&_nc_ht=scontent-jnb1-1.xx&oh=fa5ffbf10d32932f90b8b84955eea320&oe=5FAF305E" /> */}
        <IonCardContent>
          <IonCardSubtitle>{tech.category}</IonCardSubtitle>
          <IonCardTitle>{tech.title}</IonCardTitle>
        </IonCardContent>
        <IonCardContent>
          {tech.description}
          <IonButton onClick={ () => console.log("remove me!")}> Remove from favourites(TODO)
      </IonButton>
        </IonCardContent>
      </IonCard>)
  }) : ''

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle size="large">Favourites</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Favourites</IonTitle>
          </IonToolbar>
        </IonHeader>
      <IonLoading message="Loading favourites..." isOpen={busy} />
        {techItems}
      </IonContent>
    </IonPage>
  );
};

export default Favourites;
