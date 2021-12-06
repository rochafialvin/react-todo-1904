export const loginAction = (loginData) => {
  console.log(loginData);
  return {
    type: "LOGIN_SUCCESS",
    payload: { id: loginData.id, username: loginData.username },
  };
};
