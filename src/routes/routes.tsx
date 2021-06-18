import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { HashRouter, Route, Switch, useLocation, useHistory } from 'react-router-dom';
import { AuthState } from 'src/store/modules/auth/types';
import { AppState } from 'src/store/types';

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

  const { signed } = useSelector<AppState, AuthState>(state => state.auth)

  const RoutesFilter = () => {

    const history = useHistory()
    const { pathname } = useLocation()

    useEffect(() => {
      if (!signed && pathname !== '/login') {
        history.push("/login")
      }
    }, [signed, pathname])

    return (
      <>
      {signed ? (
        <Route path="/"  component={TheLayout} />
      ) : (
        <>
        <Route exact path="/login" component={Login} />
        </>
      )}
      </>
    )
  }

  return(
    <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/404" component={Page404} />
              <Route exact path="/500" component={Page500} />
              <RoutesFilter />
            </Switch>
          </React.Suspense>
      </HashRouter>
  )
}

export default Router
