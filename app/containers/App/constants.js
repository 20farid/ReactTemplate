/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_REPOS = 'boilerplate/App/LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'boilerplate/App/LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'boilerplate/App/LOAD_REPOS_ERROR';

const IMAGES = {
    LOAD: 'IMAGES_LOAD',
    LOAD_SUCCESS: 'IMAGES_LOAD_SUCCESS',
    LOAD_FAIL: 'IMAGES_LOAD_FAIL',
};

const STATS = {
    LOAD: 'STATS_LOAD',
    LOAD_SUCCESS: 'STATS_LOAD_SUCCESS',
    LOAD_FAIL: 'STATS_LOAD_FAIL',
};

export { IMAGES, STATS};
