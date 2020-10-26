import authReducer from '../../redux/reducers/authReducer';

const userDataTemplate = {
  token: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyfQ.68NcogyO1TlhZSp7ZzrgcaxSxTw6tedbiw-zuAUbubg',
  user: {
    admin: null,
    created_at: '2020-10-14T17:53:56.288Z',
    email: 'test@gmail.com',
    id: 2,
    password_digest: '$2a$12$6hvr0aP41tw7Edv1k11Q2eU1ofkpZi0vXaGsmLVatqZg4.Ik3S4zy',
    updated_at: '2020-10-14T17:53:56.288Z',
    username: 'test',
  },
};

describe('authReducer', () => {
  describe('INITIAL_STATE', () => {
    test('returns initial state', () => {
      const action = { type: 'dummy_action' };
      const initialState = {};

      expect(authReducer(undefined, action)).toEqual(initialState);
    });

    describe('SET_USER', () => {
      test('returns the changed state', () => {
        const action = { type: 'SET_USER', userData: userDataTemplate };
        const expectedState = { userData: userDataTemplate };

        expect(authReducer(undefined, action)).toEqual(expectedState);
      });
    });
  });
});
