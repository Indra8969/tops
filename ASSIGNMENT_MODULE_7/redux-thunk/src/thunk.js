// thunks.js
import axios from 'axios';
import { 
  fetchUsersRequest, 
  fetchUsersSuccess, 
  fetchUsersFailure 
} from './actions';

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(fetchUsersRequest());
    try {
      const response = await axios.get('http://localhost:3000/users'); // Adjust the URL based on your JSON server
      const users = response.data;
      dispatch(fetchUsersSuccess(users));
    } catch (error) {
      dispatch(fetchUsersFailure(error.message));
    }
  };
};
