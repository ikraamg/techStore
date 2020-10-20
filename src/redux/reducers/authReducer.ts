const defaultState: any = {};

export default function authReducer(state = defaultState, action: any): any {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        userData: action.userData,
      };
    case 'LOG_OUT':
      return {};
    default:
      return state;
  }
}
