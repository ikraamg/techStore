const defaultState = {
  user: {}
}

export default function authReducer(
  state = defaultState,
  action: any 
): any {
  // work with state
  switch(action.type) {
    case 'SET_USER_STATE':
      return {
        ...state,
        user: {
          username: action.payload
        }
      }
  }

  return state
}