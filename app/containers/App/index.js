/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
// import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import FrontPage from 'containers/FrontPage/index';
import MoviePage from 'containers/Page/Movie/moviepage';
import MovieInfinite from 'containers/Page/Movie';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

// Accounts component
import SignupPage from 'containers/account/SignUp';
import LoginPage from 'containers/account/Login';


import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(1024px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

//
// <Route path="/guthub" component={HomePage} />
// <Route path="/frontpage" component={FrontPage} />
// <Route
//   path="/frontpage/photo/:id"
//   render={props => (
//     <DetailPage {...props} key={props.match.params.id} />
//   )}
// />
// <Route path="/movies" component={MoviePage} />
// <Route path="/features" component={FeaturePage} />

export default function App() {
  return (
    <Router>
      <AppWrapper>
        <Helmet titleTemplate="Okezone" defaultTitle="Okezone">
          <meta name="description" content="Okezone" />
        </Helmet>
        <Switch>
          <Route exact path="/" component={FrontPage} />
          <Route path="/mov" component={MovieInfinite} />
          <Route path="/movies" component={MoviePage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </AppWrapper>
    </Router>
  );
}
