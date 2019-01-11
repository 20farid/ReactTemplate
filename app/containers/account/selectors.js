import { createSelector } from 'reselect';

const selectRegistration = state => state.get('registration');
const selectLogin = state => state.get('login');

const selectRegistering = () =>
  createSelector(selectRegistration, result => result.get('registering'));
const selectStatusRegistering = () =>
  createSelector(selectRegistration, result => result.get('status'));

const selectLoggingIn = () =>
  createSelector(selectLogin, result => result.get('loggingIn'));
const selectStatusLoggingIn = () =>
  createSelector(selectLogin, result => result.get('status'));
const selectErrorLoggingIn = () =>
  createSelector(selectLogin, result => result.get('error'));

export {
  selectRegistering,
  selectStatusRegistering,
  selectLoggingIn,
  selectStatusLoggingIn,
  selectErrorLoggingIn
}
