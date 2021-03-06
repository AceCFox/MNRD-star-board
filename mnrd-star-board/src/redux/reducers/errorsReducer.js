import { combineReducers } from 'redux';

// loginMessage holds the string that will display
// on the login screen if there's an error
const loginMessage = (state = '', action) => {
  switch (action.type) {
    case 'CLEAR_LOGIN_ERROR':
      return '';
    case 'LOGIN_INPUT_ERROR':
      return 'Oops! Enter your derby name and password.';
    case 'LOGIN_FAILED':
      return 'Oops! The derby name and password didn\'t match. Try again!';
    case 'LOGIN_FAILED_NO_CODE':
      return 'Oops! Something went wrong! Is the server running?';
    default:
      return state;
  }
};

// registrationMessage holds the string that will display
// on the registration screen if there's an error
const registrationMessage = (state = '', action) => {
  switch (action.type) {
    case 'CLEAR_REGISTRATION_ERROR':
      return '';
    case 'REGISTRATION_NAME_ERROR':
      return 'The Name field cannot be left blank.';
    case 'REGISTRATION_PASSWORD_LENGTH_ERROR':
      return 'oops! Password must contain at least 7 characters.';
    case 'REGISTRATION_PASSWORD_MATCH_ERROR':
      return `oops! Passwords don't match.`;
    case 'REGISTRATION_TEAM_ERROR':
      return `You have to pick from the selected teams or "other"`;
    case 'REGISTRATION_FAILED':
      return 'Oops! That didn\'t work. The derby name might already be taken. Try again!';
    default:
      return state;
  }
};

// make one object that has keys loginMessage, registrationMessage
// these will be on the redux state at:
// state.errors.loginMessage and state.errors.registrationMessage
export default combineReducers({
  loginMessage,
  registrationMessage,
});
