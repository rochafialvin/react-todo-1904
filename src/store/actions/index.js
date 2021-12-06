export const loginAction = (loginData) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: { id: loginData.id, username: loginData.username },
  };
};
