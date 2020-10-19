import { IonContent, IonHeader, IonLoading, IonPage, IonTitle, IonToolbar, useIonViewWillEnter, IonGrid, IonRow, IonButtons, IonMenuButton, IonButton, IonText } from '@ionic/react';
import React, { useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { request } from '../helpers/api';
import { toast } from '../helpers/toast';
import { setTeches } from '../redux/actions/dataActions';
import FavouriteItem from '../components/FavouriteItem';
import { useHistory } from 'react-router';

const Favourites: React.FC = () => {
  const dispatch = useDispatch()
  const [busy, setBusy] = useState<boolean>(false)
  const user = useSelector((state: RootStateOrAny) => state.auth.userData)
  const {token} = user ? user : ''
  const favourites = useSelector((state: RootStateOrAny) => state.data.favourites)
  const history = useHistory();
  
  const allData = () => {
    setBusy(true);
    const favReq = request(token, 'user_favourites');
    Promise.all([favReq])
      .then((data) => {        
        setBusy(false)
        if(data[0].error) {
          toast('Please check internet connection', 4000)
        } else {
          dispatch(setTeches(data[1]))
        }
      });
  }

  useIonViewWillEnter(() =>{
    allData()
  })

  const handleFavourite = (tech_id:number) =>{
    setBusy(true);
    request(token, `favourites/${tech_id}`, 'DELETE').then((data) => 
    {
      if(data.error) {
        setBusy(false)
        toast(data.error, 4000)
      } else {
        allData()
        history.push('/tech')
        history.push('/favourites')
      }
    })
  }

  const favItems = () => {
  return favourites ? favourites.map((tech:any) =>  <FavouriteItem key= {tech.id} tech={tech} handleFavourite={handleFavourite}></FavouriteItem>) : [] 
  }
  const items = favItems()

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle  size="large">Favourites</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Favourites</IonTitle>
          </IonToolbar>
        </IonHeader>
      <IonLoading message="Loading ..." isOpen={busy} />
      <IonGrid>
       
          {items.length === 0 ? 
          (<IonRow className='ion-justify-content-center'>
            <IonButton 
            style={{'marginTop': "25vh"}} 
            fill='outline' 
            routerLink='/tech' 
            expand='full'> 
              <IonText color='primary'>
                Click to Add New Favourites
              </IonText>
            </IonButton> 
          </IonRow>)
          :(
          <IonRow>
            {items}
          </IonRow>
          ) 
          }
      </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Favourites;
