import React, {Suspense} from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import config from '@/common/config';
import BasicLayout from '@/layouts/BasicLayout';

const Router: React.FC = (props): React.ReactElement => {
  return (
    <BrowserRouter>
      <BasicLayout>
        <Suspense fallback={<div>Loading</div>}>
          <Switch>
            {config.map((value, index) => (
              <Route key={index} exact path={value.path} component={value.component} />
            ))}
            <Route exact path='/' render={() => <Redirect to="/todo" />} />
          </Switch>
        </Suspense>
      </BasicLayout>
    </BrowserRouter>
  )
}

export default Router;
