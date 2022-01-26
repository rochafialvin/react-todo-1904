export const loginAction = (loginData) => {
  // loginData = { user, token }
  localStorage.setItem("userData", JSON.stringify(loginData));

  return {
    type: "LOGIN_SUCCESS",
    payload: loginData,
  };
};

export const keepLoginAction = (userData) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: userData,
  };
};
