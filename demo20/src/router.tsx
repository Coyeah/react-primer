import React, {Suspense} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import config from '@/common/config';
import BasicLayout from '@/layouts/BasicLayout';

const Router: React.FC = (props): React.ReactElement => {
  return (
    <BrowserRouter>
      <BasicLayout>
        <Suspense fallback={<div>Loading</div>}>
          <Switch>
            {config.map((value, index) => (
              <Route key={index} path={value.path} component={value.component} />
            ))}
          </Switch>
        </Suspense>
      </BasicLayout>
    </BrowserRouter>
  )
}

export default Router;
