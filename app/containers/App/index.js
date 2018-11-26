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
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FrontPage from 'containers/FrontPage';
import DetailPage from 'containers/Detail/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import MoviePage from 'containers/Page/Movie';
import InfiniteScroll from 'containers/Page/Movie/InfiniteScroll';

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
    <AppWrapper>
      <Helmet titleTemplate="Okezone" defaultTitle="Okezone">
        <meta name="description" content="Okezone" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />

        <Route exact path="/frontpage" component={FrontPage} />
        <Route
          path="/frontpage/photo/:id"
          render={props => (
            <DetailPage {...props} key={props.match.params.id} />
          )}
        />
        <Route exact path="/movie" component={MoviePage} />
        <Route exact path="/test" component={InfiniteScroll} />
        <Route path="/features" component={FeaturePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>

      <GlobalStyle />
    </AppWrapper>
  );
}
