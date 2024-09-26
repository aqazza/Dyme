// use this to decode a token and get the user's information out of it
import * as jwtDecode from 'jwt-decode';
 // Use the correct named import

// create a new class to instantiate for a user
class AuthService {
  // get user data from JSON web token by decoding it
  getProfile() {
    return jwtDecode(this.getToken()); // Update to use jwtDecode
  }

  // return `true` or `false` if token exists (does not verify if it's expired yet)
  loggedIn() {
    // retrieved the token
    const token = this.getToken();
    // if you have the token, return TRUE
    return token ? true : false;
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    // Saves user token to localStorage and reloads the application for logged in status to take effect
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
    // this will reload the page and reset the state of the application
    window.location.reload();
  }
}

export default new AuthService();
