const defaultState = {};

export default function dataReducer(state = defaultState, action: any): any {
  switch (action.type) {
    case 'SET_TECHES':
      return {
        ...state,
        teches: action.teches,
      };
    case 'SET_FAVOURITES':
      return {
        ...state,
        favourites: action.favourites,
      };
    default:
      return state;
  }
}
