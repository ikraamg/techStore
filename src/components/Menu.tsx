import {
  IonButton,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import React from 'react';
import { useLocation } from 'react-router-dom';
import { logOutOutline, mailOutline, mailSharp, trashOutline, trashSharp} from 'ionicons/icons';
import './Menu.css';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import {logOutUser} from '../redux/actions/authActions'

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Favourites',
    url: '/favourites',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Tech',
    url: '/tech',
    iosIcon: trashOutline,
    mdIcon: trashSharp
  },
];

const Menu: React.FC = () => {
  const dispatch = useDispatch()
  const user = useSelector((state: RootStateOrAny) => state.auth.userData)
  const location = useLocation();
  const handleLogOut = () => dispatch(logOutUser())
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
          <IonButton onClick={handleLogOut}> <IonIcon slot="start" md={logOutOutline} ></IonIcon> Logout </IonButton>
        <IonList id="inbox-list">
          <IonListHeader>Inbox</IonListHeader>
          <IonNote>{user ? user.user.username : ''}</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
