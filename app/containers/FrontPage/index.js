import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import InfiniteScroll from 'react-infinite-scroller';
import injectSaga from 'utils/injectSaga';

import ReduxLazyScroll from 'components/ReduxLazyScroll';
import { makeSelectImages, makeSelectImagesLoading, makeSelectImagesError, makeSelectPage, makeSelecthasMore } from './selectors';
import { loadImages, nextPage } from 'redux/actions';
import imagesSaga from 'redux/saga/imagesSaga';

import ImageGrid from 'components/ImageGrid';
import Button from 'components/Button';
import './styles.css';


class FrontPage extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
          <div>
            <p>front</p>
          </div>
        )
    }
}


export default compose(
    //withSaga
    //withConnect,
)(FrontPage);
