import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton } from '@ionic/react';
import './Calculator.css';

const Tab3: React.FC = () => {
  const [expression, setExpression] = useState('');

  const buttonClick = (value: string) => {
    setExpression(prevExpression => prevExpression + value);
  };

  const clearExpression = () => {
    setExpression('');
  };

  const calculateResult = () => {
    try {
      const result = eval(expression);
      setExpression(result.toString());
    } catch (error) {
      setExpression('Error');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonInput value={expression} readonly={true} />
        <div>
          <IonButton onClick={() => buttonClick('1')}>1</IonButton>
          <IonButton onClick={() => buttonClick('2')}>2</IonButton>
          <IonButton onClick={() => buttonClick('3')}>3</IonButton>
          <IonButton onClick={() => buttonClick('+')}>+</IonButton>
        </div>
        <div>
          <IonButton onClick={() => buttonClick('4')}>4</IonButton>
          <IonButton onClick={() => buttonClick('5')}>5</IonButton>
          <IonButton onClick={() => buttonClick('6')}>6</IonButton>
          <IonButton onClick={() => buttonClick('-')}>-</IonButton>
        </div>
        <div>
          <IonButton onClick={() => buttonClick('7')}>7</IonButton>
          <IonButton onClick={() => buttonClick('8')}>8</IonButton>
          <IonButton onClick={() => buttonClick('9')}>9</IonButton>
          <IonButton onClick={() => buttonClick('*')}>*</IonButton>
        </div>
        <div>
          <IonButton onClick={() => buttonClick('0')}>0</IonButton>
          <IonButton onClick={() => buttonClick('/')}>/</IonButton>
          <IonButton onClick={calculateResult}>=</IonButton>
          <IonButton onClick={clearExpression}>Clear</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
