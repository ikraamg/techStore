export const setUser = (userData: any) => {
  return { type: "SET_USER", userData };
};

export const logOutUser = () => {
  return { type: "LOG_OUT" };
};
