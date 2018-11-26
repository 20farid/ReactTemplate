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


export function topPosition(domElt) {
  if (!domElt) {
    return 0;
  }
  return domElt.offsetTop + topPosition(domElt.offsetParent);
}


class FrontPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        page: 1,
        images: [],
        loadingState: false,
        hasMoreItems: true
      };
      //this.loadImages = this.loadImages.bind(this);

    }


    // loadImages() {
    //   const {page} = this.props;
    //   this.props.loadImages(page);
    // }
    componentWillMount(){
      const {page} = this.props;
      this.props.loadImages(page);
    }
    componentDidMount() {
      this.refs.iScroll.addEventListener("scroll", () => {

          if (this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight >=this.refs.iScroll.scrollHeight){

            this.loadMoreItems();
          }
      });


    }


    loadMoreItems() {
      const {page} = this.props;
      this.props.loadImages(page);
      this.setState({ loadingState: true });
      setTimeout(() => {
        this.setState({ loadingState: false });
      }, 3000);
    }



    // <div ref="iScroll" style={{ height: "100VH", overflow: "auto" }}>
    //   <div className="content">
    //       <section className="grid">
    //         <ImageGrid images={images} />
    //       </section>
    //   </div>
    //   {error && <div className="error">{JSON.stringify(error)}</div>}
    //   <Button
    //       onClick={this.nextPage}
    //       loading={loading}
    //   >
    //       Load More
    //   </Button>
    //   {this.state.loadingState ? <p className="loading"> loading More Items..</p> : ""}
    // </div>


   //  <div className="content">
   //    <section className="grid">
   //       <ReduxLazyScroll
   //         isFetching={isFetching}
   //         errorMessage={error}
   //         loadMore={this.loadImages}
   //         hasMore={hasMore}
   //       >
   //         <ImageGrid images={images} />
   //       </ReduxLazyScroll>
   //     </section>
   // </div>

    render() {
        const { loading, data, error, page, hasMore } = this.props;
        console.log(this.props);
        if(loading){
          return null
        }
          return (

            <div ref="iScroll" style={{ height: "80VH", overflow: "auto" }}>
              <div className="content">
                  <section className="grid">
                    <ImageGrid images={data} />
                  </section>
              </div>
              {error && <div className="error">{JSON.stringify(error)}</div>}
              <Button
                  onClick={this.nextPage}
                  loading={loading}
              >
                  Load More
              </Button>
              {this.state.loadingState ? <p className="loading"> loading More Items..</p> : ""}
            </div>

          );
    }
}

FrontPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  //error: PropTypes.bool,
  //imageStats : PropTypes.array,
};


const mapStateToProps = createStructuredSelector({
    data : makeSelectImages(),
    loding : makeSelectImagesLoading(),
    error : makeSelectImagesError(),
    page : makeSelectPage(),
    hasMore : makeSelecthasMore(),
});

const mapDispatchToProps = dispatch => ({
    loadImages: (page) => dispatch(loadImages(page)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withSaga = injectSaga({ key: 'images', saga:imagesSaga });

export default compose(
    //withSaga
    withConnect,
)(FrontPage);
