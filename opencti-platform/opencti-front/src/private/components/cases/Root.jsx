import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { BoundaryRoute } from '../Error';
import Resolver from './Resolver';
import Incidents from './Incidents';
import RootIncident from './incidents/Root';
import Feedbacks from './Feedbacks';
import RootFeedback from './feedbacks/Root';

const Root = () => (
  <Switch>
    <BoundaryRoute
      exact
      path="/dashboard/cases"
      render={() => <Redirect to="/dashboard/cases/incidents" />}
    />
    <BoundaryRoute
      exact
      path="/dashboard/cases/incidents"
      component={Incidents}
    />
    <BoundaryRoute
      path="/dashboard/cases/incidents/:caseId"
      component={RootIncident}
    />
    <BoundaryRoute
      exact
      path="/dashboard/cases/feedbacks"
      component={Feedbacks}
    />
    <BoundaryRoute
      path="/dashboard/cases/feedbacks/:caseId"
      component={RootFeedback}
    />
    <BoundaryRoute
      path="/dashboard/cases/resolver/:caseId"
      component={Resolver}
    />
  </Switch>
);

export default Root;
