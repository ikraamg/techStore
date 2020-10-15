export const setUser = (userData: any) => {
  return { type: 'SET_USER', userData }
}

export const logOut = () => {
  return { type: 'SET_USER' }
}