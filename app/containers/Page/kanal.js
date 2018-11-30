import React, { Component } from 'react';
import {
  Route,
} from 'react-router-dom';


import MovieInfinite from 'containers/Page/Movie/index';

class Kanal extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return <div>
      <Route path={`${this.props.match.path}/movie`} component={MovieInfinite}/>
      {/*      <Route path={`${this.props.match.path}/news`} component={News}/>*/}
    </div>
  }
}

export default Kanal;
