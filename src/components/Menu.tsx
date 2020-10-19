import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonListHeader,
} from '@ionic/react';

import React from 'react';
import { useLocation } from 'react-router-dom';
import { logOutOutline, storefrontOutline, starOutline} from 'ionicons/icons';
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
    title: 'Tech',
    url: '/tech',
    iosIcon: storefrontOutline,
    mdIcon: storefrontOutline
  },
  {
    title: 'Favourites',
    url: '/favourites',
    iosIcon: starOutline,
    mdIcon: starOutline
  },
  {
    title: 'Log Out',
    url: '/logout',
    iosIcon: logOutOutline,
    mdIcon: logOutOutline
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
        <IonList id="inbox-list">
          <IonListHeader>Tech Explorer</IonListHeader>
          <IonNote className= 'ion-padding'>{user ? user.user.username : ''}</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false} onClick={appPage.url === '/logout' ? handleLogOut : () => ''}>
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
