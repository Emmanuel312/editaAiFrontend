import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import SignIn from '~/Pages/SignIn';
import SignUp from '~/Pages/SignUp';
import Dashboard from '~/Pages/Dashboard';
import Comments from '~/Pages/Comments';
import Notifications from '~/Pages/Notifications';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={SignIn} exact />
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/service/:id/comments" component={Comments} isPrivate />
      <Route path="/notifications" component={Notifications} isPrivate />
    </Switch>
  );
}
