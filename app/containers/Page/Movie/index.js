import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import ImageList from 'components/ImageList';
import { loadConfig, loadMovies } from 'redux/actions/movies';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import SLiderContent from 'components/Slider';
import { configReducer } from './configReducer';
import configSaga from './configSaga';

import InfiniteScroll from './InfiniteScroll';

import {
  makeSelectMoviesLoading,
  makeSelectMoviesError,
  selectConfig,
  makeSelectConfig,
  makeSelectResults,
  makeSelectTotalPages,
  makeSelectTotalResults,
} from './selectors';

class MoviePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      hasMoreItems: true,
      results: [],
      loading: true,
      scrolling: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.props.loadConfig();
    this.loadList();
  }

  componentWillMount() {
    this.scrollListener = window.addEventListener('scroll', e => {
      this.handleScroll(e);
    });
  }

  componentWillUnmount() {
    this.scrollListener = window.removeEventListener('scroll', e => {
      this.handleScroll(e);
    });
  }

  handleScroll = () => {
    const { scrolling, page } = this.state;
    const { totalPages, totalResults } = this.props;
    if (scrolling) return;
    if (totalPages <= page) return;
    const lastLi = document.querySelector('ul.list li.item:last-of-type');
    const lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
    const pageOffset = window.pageYOffset + window.innerHeight;
    const bottomOffset = 20;
    if (pageOffset > lastLiOffset - bottomOffset) {
      this.loadMore();
    }
  };

  loadList() {
    const { page } = this.state;
    this.props.loadMovies(page);
    // this.setState((prevState, props) => ({
    //   results: [...prevState.results , ...props.results],
    //   loading: props.loading,
    // }));
  }

  loadMore() {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
      }),
      this.loadList,
    );
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

    console.log(this.props);
    console.log('results ini', this.state.results);
    if (loading == true && config !== undefined) return null;
    return (
      <div>
        <SLiderContent results={results.slice(0, 5)} config={config} />
        <ul className="list">
          <ImageList images={results} config={config} />
          <a onClick={this.loadMore.bind(this)}>Load more</a>
        </ul>
      </div>
    );
  }
}

MoviePage.propTypes = {
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
)(MoviePage);
