/**
 *
 * Account
 *  _Register
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { requestRegister } from 'redux/accounts/actions/register';
import { selectRegistering, selectStatusRegistering } from './selectors';

import InputText from 'components/FormInput/Input';

class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: '',
        test:''
      },
      submitted: false,
      status: false
    };

    this.handleSubmit =  this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
        this.props.requestRegister(user);
    }
  }
  render(){
    const { registering, status } = this.props;
    const { user, submitted } = this.state;
    console.log('statuss : ', status);
    console.log('user ', user);
    var divStyle = {
      width:'30px',
      height:'30px'
    };
    return(
      <div className="">
        {status ? <div>{status}</div> : ''}
        <form name="form" onSubmit={this.handleSubmit}>
          <InputText
            name="email"
            required="true"
            msg={(submitted && !user.email ? 'email is required' : '')}
            act={(submitted && !user.email ? 'has-eror' : '')}
            value={user.email}>

            <input type="text" className="form-control" name="email" value={user.email} onChange={this.handleChange} />

          </InputText>

          <InputText
            name="password"
            required="true"
            msg={(submitted && !user.password ? 'password is required' : '')}
            act={(submitted && !user.password ? 'has-eror' : '')}
            value={user.password}>

            <input type="text" className="form-control" name="password" value={user.password} onChange={this.handleChange} />

          </InputText>

          <div className="form-group">
            <button className="btn btn-primary">Register</button>
            <Link to="/login" className="btn btn-link">Cancel</Link>
          </div>
          { registering &&
            <img style={divStyle} src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
          }
        </form>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  registering: selectRegistering(),
  status: selectStatusRegistering()
});

const mapDispatchToProps = dispatch => ({
  requestRegister: user => dispatch(requestRegister(user))
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect
)(SignupPage);
