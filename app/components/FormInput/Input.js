/*
* Input default
* Props 
*   name="email"
*   required="true"
*   msg={(submitted && !user.email ? 'email is required' : '')}
*   act={(submitted && !user.email ? 'has-eror' : '')}
*   value={user.email}>
*
*/

import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import './input.css';


const InputText = props => {
  return (
    <div className={'InputText input--ruri ' + props.act + (props.value !== '' ? 'input--filled' : '')}>
      {props.children}
      <label className="input__label input__label--ruri" htmlFor={props.name}>
        <span className="input__label-content input__label-content--ruri">{props.name}</span>
      </label>
      { props.required ? <div>{props.msg}</div> : ''}
    </div>
  )
};

InputText.propTypes = {
  children: PropTypes.any,
};

export default compose()(InputText);
