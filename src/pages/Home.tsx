import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { Route, RouteComponentProps } from 'react-router-dom';
import './Home.css';

interface HomePageProps extends RouteComponentProps<{
  id: string;
}> { }

const Home: React.FC<RouteComponentProps> = ({match, history}) => {
  function handleSubmit(event: any): void {
    history.push('/dashboard');
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Koerber Mobile - Bhargav</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className='vertical-center'>

          <div className='center' >


            {/* Click below button to see Device information. */}
            <IonButton onClick={handleSubmit}>Device Info</IonButton>

          </div>
        </div>

      </IonContent>
      
    </IonPage>
  );
};

export default Home;
