/**
 * Account
 *  _Login
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { requestLogin } from 'redux/accounts/actions/login';
import {
  selectLoggingIn,
  selectStatusLoggingIn,
  selectErrorLoggingIn } from './selectors';

import InputText from 'components/FormInput/Input';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: ''
      },
      submitted: false,
      status: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(ev){
    const { name, value } = ev.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  }

  handleSubmit(ev){
    ev.preventDefault();
    this.setState({ submitted: true });
    const { user } = this.state;
    if( user.email && user.password ){
        this.props.requestLogin(user);
    }
  }

  render(){
    const { loggingIn, status } = this.props;
    const { user, submitted } = this.state;
    console.log('user', user);
    var divStyle = {
      width:'30px',
      height:'30px'
    };
    return(
      <div className="">
        <h2>Login</h2>
        {status ? <div>{status}</div> : ''}
        <form name="login" onSubmit={this.handleSubmit}>
          <InputText
            name="email"
            required="true"
            msg={(submitted && !user.email ? 'email is required' : '')}
            act={(submitted && !user.email ? 'has-eror' : '')}
            value={(user.email)}
          >
            <input type="email" className="form-control" name="email" value={user.email} onChange={this.handleChange}/>
          </InputText>

          <InputText
            name="password"
            required="true"
            msg={(submitted && !user.password ? 'password is required' : '')}
            act={(submitted && !user.password ? 'has-eror' : '')}
            value={user.password}>

            <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />

          </InputText>

          <div className="form-group">
            <button className="btn btn-primary">Login</button>
            <Link to="/login" className="btn btn-link">Cancel</Link>
          </div>
          { loggingIn &&
            <img style={divStyle} src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
          }
        </form>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  loggingIn: selectLoggingIn(),
  status: selectStatusLoggingIn(),
  error: selectErrorLoggingIn()
});

const mapDispatchToProps = dispatch => ({
  requestLogin: user => dispatch(requestLogin(user))
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect
)(LoginPage);
