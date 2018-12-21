// /**
//  *
//  * Login Page
//  *
//  */
//
//  import React, { Component } from 'react';
//  import { Link } from 'react-router-dom';
//  import { connect } from 'react-redux';
//
//  //import { userActions } from '../_actions';
//
// class Login extends Component {
//   constructor(props) {
//     super(props);
//
//     //dispatch action logout
//
//     this.state = {
//       email: '',
//       password: '',
//       submitted: false
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   handleSubmit(e) {
//     e.preventDefault();
//     this.setState({ submitted: true });
//     const { email, password } = this.state;
//     //dispatch action login
//   }
//
//   render(){
//     const { email, password, submitted } = this.state;
//     return (
//       <div>
//         <h2>Login</h2>
//         <form name="form" onSubmit={this.handleSubmit}>
//           <div className=`form-froup ${submitted && !email && 'has-error'}`>
//             <label htmlFor="email">email</label>
//             <input type="text" className="form-control" name="email" value={email} onChange={this.handleChange} />
//             { submitted && !email &&
//               <div>Email is required</div>
//             }
//           </div>
//           <div className=`form-froup ${submitted && !password && 'has-error'}`>
//             <label htmlFor="email">email</label>
//             <input type="text" className="form-control" name="email" value={email} onChange={this.handleChange} />
//             { submitted && !email &&
//               <div>Email is required</div>
//             }
//           </div>
//           <div className="form-froup">
//             <button className="btn btn-primary">Login</button>
//             {loggingIn && <span>Logging</span>}
//             <Link to="/register" className="btn">Register</Link>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }
