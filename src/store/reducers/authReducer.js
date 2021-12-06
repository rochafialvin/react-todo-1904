const init = {
  id: 0,
  username: "",
  berhasil: "Hore",
};

// apa yang di return reducer akan disimpan ke state (replace)
// reducer tidak boleh me-return undefiend
// saat pertama kali running, state akan berisi undefiend, karena tidak boleh me return undefiend maka diberi default value
const authReducer = (state = init, action) => {
  /*
    {
      type: "LOGIN_SUCCESS",
      payload: {id: 99, username: "rochafi", role: "user"}
    }
  */
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.username,
      };

    case "LOGOUT_SUCCESS":
      return init;

    default:
      // Mulangin data
      return state;
  }
};

export default authReducer;
