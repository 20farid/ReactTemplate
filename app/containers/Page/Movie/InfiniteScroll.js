import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

import { Row, LeftSide__col3, LeftSide__col7 } from 'components/Grid';
import MainContainer from 'components/MainContainer';
import ImageList from 'components/ImageList';

class InfiniteScroll extends Component{
  state = {
    results: [],
    config:{},
    page: 1,
    totalPages: null,
    scrolling: false,
  }
  componentWillMount() {
    this.loadConfig()
    this.loadMovie()
    this.scrollListener = window.addEventListener('scroll', (e) => {
      this.handleScroll(e)
    });
  }
  handleScroll = () => {
    const { scrolling, totalPages, page} = this.state
    if (scrolling) return
    if (totalPages <= page) return
    var lastLi = document.querySelector('ul.list li.item:last-of-type')
    var lastLiOffset = lastLi.offsetTop + lastLi.clientHeight
    var pageOffset = window.pageYOffset + window.innerHeight
    var bottomOffset = 20
    if (pageOffset > lastLiOffset - bottomOffset) {
      this.loadMore()
    }

  }
  loadConfig = () => {
    const KEY = '?api_key=7d711d94f2f7f57e099b7b4ac6cbd56e';
    const URL = 'https://api.themoviedb.org';
    const urlConfig = `${URL}/3/configuration${KEY}`;
    fetch(urlConfig)
      .then(response => response.json())
      .then(json => this.setState({
        config: json,
      }));
  }
  loadMovie = () => {
    const {results, page, config} = this.state
    const KEY = '?api_key=7d711d94f2f7f57e099b7b4ac6cbd56e'
    const URL = 'https://api.themoviedb.org'
    const urlList = `${URL}/3/discover/movie${KEY}&page=${page}&year=2018`
    fetch(urlList)
      .then(response => response.json())
      .then(json => this.setState({
        results: [...results, ...json.results],
        scrolling: false,
        totalPages: json.total_pages,
      }))
  }
  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page+1,
      scrolling: true,
    }), this.loadMovie)
  }
  render(){
    console.log('config', this.state.config)
    console.log('results', this.state.results)
    return(
      <MainContainer>
        <div>
          i
        </div>
        <Row>
          <LeftSide__col3>
          j
          </LeftSide__col3>
          <LeftSide__col7>
            <ul className="list">
              <ImageList images={this.state.results} config={this.state.config}/>
              <a onClick={this.loadMore}>Load more</a>
            </ul>
          </LeftSide__col7>
        </Row>
      </MainContainer>

    )
  }
}

export default InfiniteScroll;
