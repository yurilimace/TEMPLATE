import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

const Login = React.lazy(() => import('../pages/login/Login'));
const TheLayout = React.lazy(() => import('../containers/TheLayout'));
const Page404 = React.lazy(() => import('../pages/page404/Page404'));
const Page500 = React.lazy(() => import('../pages/page500/Page500'));

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)


const Router = () => {
  return(
    <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/404" component={Page404} />
              <Route exact path="/500" component={Page500} />
              <Route path="/"  component={TheLayout} />
            </Switch>
          </React.Suspense>
      </HashRouter>
  )
}

export default Router
