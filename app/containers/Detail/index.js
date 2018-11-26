import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';


import injectSaga from 'utils/injectSaga';

import { makeSelectDetail, makeSelectDetailLoading, makeSelectDetailError} from './selectors';
import { loadDetail } from 'redux/actions';
import detailSaga from 'redux/saga/detailSaga';

import FullView from 'components/FullView';

class DetailPage extends Component {
  componentWillMount(){
    let id = this.props.match.params.id;
    this.props.loadDetail(id);
  }

  render(){
      const { loading, detail, error } = this.props;
      const detailProps = {loading, detail, error};
      console.log(this.props);
      if(loading){
        return null
      }
      return(
            <div>
              <FullView {...detailProps}/>
            </div>
      );
  }

}


DetailPage.propTypes = {
  loading: PropTypes.bool,
  detail: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};


const mapStateToProps = createStructuredSelector({
  detail : makeSelectDetail(),
  loading : makeSelectDetailLoading(),
  error : makeSelectDetailError(),
});

const mapDispatchToProps = dispatch => ({
    loadDetail: id => dispatch(loadDetail(id)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'detail', saga:detailSaga });

export default compose(
    withSaga,
    withConnect,
)(DetailPage);
