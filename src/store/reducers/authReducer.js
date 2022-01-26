const init = {
  user: {
    id: 0,
    username: "",
    name: "",
    email: "",
    is_verified: true,
  },
  token: "",
};

// apa yang di return reducer akan disimpan ke state (replace)
// reducer tidak boleh me-return undefiend
// saat pertama kali running, state akan berisi undefiend, karena tidak boleh me return undefiend maka diberi default value
const authReducer = (state = init, action) => {
  /*
    {
      type: "LOGIN_SUCCESS",
      payload: { user : {id, email, username, name, is_verified} , token : 'eJhcnkl' }
    }
  */
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };

    case "LOGOUT_SUCCESS":
      return init;

    default:
      // Mulangin data
      return state;
  }
};

export default authReducer;
