import { IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonLoading, IonPage, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import React, { useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import ExploreContainer from '../components/ExploreContainer';
import { request } from '../helpers/api';
import { toast } from '../helpers/toast';
import { setTeches } from '../redux/actions/dataActions';
import './Page.css';

const Tech: React.FC = () => {
  const user = useSelector((state: RootStateOrAny) => state.auth.userData)
  const dispatch = useDispatch()
  const [busy, setBusy] = useState<boolean>(false)
  const teches = useSelector((state: RootStateOrAny) => state.data.teches)
  const store = useSelector((state: RootStateOrAny) => state)
  // console.log("Tech:React.FC -> store", store)

  const {token} = user ? user : ''

  useIonViewWillEnter(() =>{
     setBusy(true)
     request(token, 'teches').then(teches => {
      setBusy(false)
      if(user.error) {
        toast(user.error, 4000)
      } else {
        dispatch(setTeches(teches))
        // console.log("Tech:React.FC -> teches", teches)
      }
    });  
  },[])

  console.log(teches)

  const techItems = teches ? teches.map((tech:any) => {
    return ( 
      <IonCard key={tech.id}>
        <img alt='mad' src="https://scontent-jnb1-1.xx.fbcdn.net/v/t31.0-8/1396939_377841179016599_1902197579_o.jpg?_nc_cat=104&_nc_sid=e3f864&_nc_ohc=MVdjGoPIrmAAX-_tsLQ&_nc_ht=scontent-jnb1-1.xx&oh=fa5ffbf10d32932f90b8b84955eea320&oe=5FAF305E" />
        <IonCardContent>
          <IonCardSubtitle>{tech.category}</IonCardSubtitle>
          <IonCardTitle>{tech.title}</IonCardTitle>
        </IonCardContent>
        <IonCardContent>
          {tech.description}
        </IonCardContent>
      </IonCard>)
  }) : ''

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{'Tech'}</IonTitle>
          </IonToolbar>
        </IonHeader>
      <IonLoading message="Logging in..." isOpen={busy} />
        {techItems}
      </IonContent>
    </IonPage>
  );
};

export default Tech;
