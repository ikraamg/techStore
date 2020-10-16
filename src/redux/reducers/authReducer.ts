const defaultState:any = {
  userData:{
    token: "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3fQ.kPxvpXMFUMcI-LnBA9ngNl8mL00Sk4OPFn8lElNcXHM",
    user: {
      admin: null,
      created_at: "2020-10-14T17:53:56.288Z",
      email: "test@testing.co.za",
      id: 7,
      password_digest: "$2a$12$6hvr0aP41tw7Edv1k11Q2eU1ofkpZi0vXaGsmLVatqZg4.Ik3S4zy",
      updated_at: "2020-10-14T17:53:56.288Z",
      username: "test",
    }
  }
}
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