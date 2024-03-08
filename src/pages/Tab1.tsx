import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Daaannniiieeelll</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonCard>
        <img alt="Silhouette of mountains" src="../src/assets/img/nami.jpg" />
        <IonCardHeader>
          <IonCardTitle>Nami</IonCardTitle>
          <IonCardSubtitle>Cat Burglar</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>Life is like a pencil that will surely run out, but will leave the beautiful writing of life.</IonCardContent>
      </IonCard>
        <ExploreContainer name="" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
