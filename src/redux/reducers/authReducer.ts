const defaultState = {}

export default function authReducer(state = defaultState, action: any): any {
  switch(action.type) {
    case 'SET_USER':
      return {
        ...state,
        userData: action.userData
    }
    case 'LOG_OUT':
      return {}
  }
  return state
}