import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import fetch from 'isomorphic-fetch';

import { loadConfig, loadMovies } from 'redux/actions/movies';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { Row, LeftSide__col3, LeftSide__col7 } from 'components/Grid';
import MainContainer from 'components/MainContainer';
import ImageList from 'components/ImageList';
import SLiderContent from 'components/Slider';
import Inf from './inf';

import configSaga from './configSaga';
import { configReducer } from './configReducer';

import {
  makeSelectMoviesLoading,
  makeSelectMoviesError,
  selectConfig,
  makeSelectConfig,
  makeSelectResults,
  makeSelectTotalPages,
  makeSelectTotalResults,
} from './selectors';

class MovieInfinite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      hasMoreItems: true,
      results: [],
      loading: true,
      scrolling: false,
    };
  }

  componentDidMount() {
    this.props.loadConfig();
    this.props.loadMovies(this.state.page);
  }

  render() {
    const {
      loading,
      error,
      config,
      results,
      totalPages,
      totalResults,
    } = this.props;

    console.log('props', this.props);

    return (
      <MainContainer>
        <div>
          <SLiderContent results={results.slice(0, 5)} config={config} />
        </div>
        <Row>
          <LeftSide__col3>j</LeftSide__col3>
          <LeftSide__col7>
            <Inf />
          </LeftSide__col7>
        </Row>
      </MainContainer>
    );
  }
}

MovieInfinite.propTypes = {
  config: PropTypes.shape({
    images: PropTypes.shape({
      backdrop_sizes: PropTypes.array,
      secure_base_url: PropTypes.string,
    }),
  }),
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  config: makeSelectConfig(),
  loading: makeSelectMoviesLoading(),
  error: makeSelectMoviesError(),
  results: makeSelectResults(),
  totalPages: makeSelectTotalPages(),
  totalResults: makeSelectTotalResults(),
});

const mapDispatchToProps = dispatch => ({
  loadConfig: () => dispatch(loadConfig()),
  loadMovies: page => dispatch(loadMovies(page)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'config', reducer: configReducer });
const withSaga = injectSaga({ key: 'config', saga: configSaga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MovieInfinite);
