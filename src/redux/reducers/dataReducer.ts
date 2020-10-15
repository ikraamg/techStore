const defaultState = {}

export default function dataReducer(state = defaultState, action: any): any {
  console.log(action)  
  switch(action.type) {
    case 'SET_TECHES':
      return {
        ...state,
        teches: action.teches
      }
    }
  // console.log(state);
  return state
}