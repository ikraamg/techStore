import { IonContent, IonHeader, IonLoading, IonPage, IonTitle, IonToolbar, useIonViewWillEnter, IonGrid, IonRow, IonButtons, IonMenuButton } from '@ionic/react';
import React, { useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { request } from '../helpers/api';
import { toast } from '../helpers/toast';
import { setTeches, setFavourites } from '../redux/actions/dataActions';
import TechItem from '../components/TechItem'



const Tech: React.FC = () => {
  const dispatch = useDispatch()
  const [busy, setBusy] = useState<boolean>(false)
  const user = useSelector((state: RootStateOrAny) => state.auth.userData)
  const {token} = user ? user : ''
  const teches = useSelector((state: RootStateOrAny) => state.data.teches)
  const favourites = useSelector((state: RootStateOrAny) => state.data.favourites)
  const store = useSelector((state: RootStateOrAny) => state)
  console.log("Tech:React.FC -> store", store)
  
  const allData = () => {
    setBusy(true);
    const techReq = request(token, 'teches');
    const favReq = request(token, 'user_favourites');
    Promise.all([techReq, favReq])
      .then((data) => {        
        setBusy(false)
        if(data[0].error || data[1].error) {
          toast('Please check internet connection', 4000)
        } else {
          dispatch(setTeches(data[0]))
          dispatch(setFavourites(data[1]))
        }
      });
  }

  const handleFavourite = (tech_id:number, status:boolean) =>{
    setBusy(true);
    const toggleFavourite = status ? 
    request(token, `favourites/${tech_id}`, 'DELETE')
    :
    request(token, 'favourites', 'POST', {favourite:{tech_id}})

    toggleFavourite.then((data) => 
    {
      if(data.error) {
        setBusy(false)
        toast(data.error, 4000)
      } else {
        allData()
      }
    })
  }

  useIonViewWillEnter(() =>{
    allData()
  })

  const addFavourites = () => {
    const out = teches.map((tech:any) => {
      const checkFavourite = favourites.filter((fav:any) => fav.id === tech.id)
      checkFavourite.length > 0 ? 
      Object.assign(tech, {favourite: true}) 
      : 
      Object.assign(tech, {favourite: false})
      return tech
    })
    return out
  }

  const techItems = () => {
  return teches && favourites ? addFavourites().map((tech:any) =>  <TechItem key= {tech.id} tech={tech} handleFavourite={handleFavourite}></TechItem>) : '' 
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start" color='primary'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle size="large">Tech</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tech</IonTitle>
          </IonToolbar>
        </IonHeader>
      <IonLoading message="Loading ..." isOpen={busy} />
      <IonGrid>
        <IonRow>
          {techItems()}
        </IonRow>
      </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tech;
