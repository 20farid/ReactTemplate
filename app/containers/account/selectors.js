import { createSelector } from 'reselect';

const selectRegistration = state => state.get('registration');

const selectRegistering = () =>
  createSelector(selectRegistration, result => result.get('registering'));
const selectStatusRegistering = () =>
  createSelector(selectRegistration, result => result.get('status'));

export {
  selectRegistering,
  selectStatusRegistering
}
