export const loginAction = (loginData) => {
  localStorage.setItem("userData", JSON.stringify(loginData));

  return {
    type: "LOGIN_SUCCESS",
    payload: { id: loginData.id, username: loginData.username },
  };
};

export const keepLoginAction = (userData) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: { id: userData.id, username: userData.username },
  };
};
