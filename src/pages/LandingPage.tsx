import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';

import Dashboard from './Dashboard';

const LandingPage: React.FC<RouteComponentProps> = ({match}) => {
  return (
    <IonRouterOutlet>
      <Route exact={true} path={match.url} component={Dashboard} />
      <Route exact={true} path={`${match.url}/users/:id`} component={Dashboard} />
    </IonRouterOutlet>
  );
};

export default LandingPage