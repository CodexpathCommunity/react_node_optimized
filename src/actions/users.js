import Axios from "axios";

export const initiateAddUsers = () => {
  return (dispatch) => {
    Axios.get("/users").then((response) => {
      console.log(response.data);
      dispatch(addUsers(response.data.results));
    });
  };
};

export const addUsers = (users) => {
  return {
    type: "ADD_USERS",
    users,
  };
};
