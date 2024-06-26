import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Wazzap!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
      <img alt="Silhouette of mountains" src="../src/assets/img/mobile.jpg" />
      <IonCardHeader>
        <IonCardTitle>Mobile legends</IonCardTitle>
        <IonCardSubtitle>Pro</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Jm is my name, late game is my game</IonCardContent>
    </IonCard>
        <ExploreContainer name="" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
