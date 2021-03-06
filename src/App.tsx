import React from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import { RootStateOrAny, useSelector } from 'react-redux';
import Menu from './Containers/Menu';
import Login from './Containers/Login';
import Register from './Containers/Register';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Home from './Containers/Home';
import Favourites from './Containers/Favourites';
import Tech from './Containers/Tech';

const App: React.FC = () => {
  const user = useSelector((state: RootStateOrAny) => state.auth.userData);
  return (
    <IonApp>
      <>
        {user ? (
          <IonReactRouter>
            <IonSplitPane contentId="main">
              <Menu />
              <IonRouterOutlet id="main">
                <Route path="/favourites" component={Favourites} exact />
                <Route path="/tech" component={Tech} exact />
                <Route path="/tech/:name" component={Tech} />
                <Redirect from="/" to="/tech" exact />
              </IonRouterOutlet>
            </IonSplitPane>
          </IonReactRouter>
        ) : (
          <IonReactRouter>
            <Route path="/home" component={Home} exact />
            <Route path="/register" component={Register} exact />
            <Route path="/login" component={Login} exact />
            <Redirect from="/" to="/home" exact />
          </IonReactRouter>
        )}
      </>
    </IonApp>
  );
};

export default App;
