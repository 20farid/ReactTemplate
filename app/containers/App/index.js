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
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FrontPage from 'containers/FrontPage';
import DetailPage from 'containers/Detail/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import MoviePage from 'containers/Page/Movie/moviepage';
import MovieInfinite from 'containers/Page/Movie/index';
import Kanal from 'containers/Page/kanal';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(1024px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <Router>
      <AppWrapper>
        <Helmet titleTemplate="Okezone" defaultTitle="Okezone">
          <meta name="description" content="Okezone" />
        </Helmet>
        <Header />

          <Route exact path="/guthub" component={HomePage} />

          <Route path="/frontpage" component={FrontPage} />
          <Route
            path="/frontpage/photo/:id"
            render={props => (
              <DetailPage {...props} key={props.match.params.id} />
            )}
          />
          <Route path="/" component={Kanal}/>
          <Route path="/movie" component={MoviePage} />
          <Route path="/test" component={MovieInfinite} />
          <Route path="/features" component={FeaturePage} />
          <Route path="" component={NotFoundPage} />


        <GlobalStyle />
      </AppWrapper>
    </Router>
  );
}
