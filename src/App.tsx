import {
    IonApp,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
    setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, personCircleOutline } from 'ionicons/icons';
import { Redirect, Route } from 'react-router-dom';
import Calculator from './pages/Calculator';
import ClickCounter from './pages/ClickCounter';
import Home from './pages/Home';
import Notes from './pages/Notes/Notes';
import Profile from './pages/Profile';
import QuotesGenerator from './pages/QuotesGenerator/QuotesGenerator';
import Todolist from './pages/Todolist/Todolist';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          
          <Route exact path="/ion-t-susana/">
            <Redirect to="/ion-t-susana/home" />
          </Route>
          <Route exact path="/ion-t-susana/home">
            <Home />
          </Route>

          
          <Route exact path="/ion-t-susana/click_counter">
            <ClickCounter />
          </Route>
          <Route exact path="/ion-t-susana/calculator">
            <Calculator />
          </Route>
          <Route exact path="/ion-t-susana/todolist">
            <Todolist />
          </Route>
          <Route exact path="/ion-t-susana/qoutes_generator">
            <QuotesGenerator />
          </Route>

          <Route exact path="/ion-t-susana/notes">
            <Notes />
          </Route>


          <Route exact path="/ion-t-susana/profile">
            <Profile />
          </Route>

        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/ion-t-susana/home">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          
          {/*
          <IonTabButton tab="profile" href="/profile">
            <IonIcon aria-hidden="true" icon={personCircleOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
          <IonTabButton tab="click_counter" href="/click_counter">
            <IonIcon aria-hidden="true" icon={fingerPrintOutline} />
            <IonLabel>Click Counter</IonLabel>
          </IonTabButton>
          <IonTabButton tab="calculator" href="/calculator">
            <IonIcon aria-hidden="true" icon={calculatorOutline} />
            <IonLabel>Calculator</IonLabel>
          </IonTabButton>
        */}

          {/* <IonTabButton tab="Tab4" href="Tab4">
            <IonIcon aria-hidden="true" icon={CloseOutline} />
            <IonLabel>Blank</IonLabel>
          </IonTabButton> */}


          <IonTabButton tab="profile" href="/ion-t-susana/profile">
            <IonIcon aria-hidden="true" icon={personCircleOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>

        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;