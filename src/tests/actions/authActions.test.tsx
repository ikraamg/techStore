import configureStore from 'redux-mock-store';
import { setUser, logOutUser } from '../../redux/actions/authActions';

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

const mockStore = configureStore();
const store = mockStore();

describe('authActions tests', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('setUser', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          userData: userDataTemplate,
          type: 'SET_USER',
        },
      ];

      store.dispatch(setUser(userDataTemplate));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('logOutUser', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          type: 'LOG_OUT',
        },
      ];

      store.dispatch(logOutUser());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
