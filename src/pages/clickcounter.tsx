import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Click Counter</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="" />
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <h2>Click Counter</h2>
          <div>Count: {count}</div>
          <button onClick={incrementCounter}>Click Me</button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
