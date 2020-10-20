import configureStore from 'redux-mock-store';
import { setFavourites, setTeches } from '../../redux/actions/dataActions';

const favouritesTemplate = [{
  category: 'Laptops',
  cost: 8000,
  created_at: '2020-10-19T07:54:49.510Z',
  description: '17-inch, Intel i5, 8gb Ram, 256Gb SSD',
  id: 5,
  price: 10000,
  title: 'MacBook Pro',
  updated_at: '2020-10-19T07:54:49.510Z',
  user_id: 1,
}, {
  category: 'Laptops2',
  cost: 8000,
  created_at: '2020-10-19T07:54:49.510Z',
  description: '17-inch, Intel i5, 8gb Ram, 256Gb SSD',
  id: 5,
  price: 10000,
  title: 'MacBook Pro',
  updated_at: '2020-10-19T07:54:49.510Z',
  user_id: 1,
}];

const techesTemplate = [{
  category: 'Laptops',
  cost: 8000,
  created_at: '2020-10-19T07:54:49.510Z',
  description: '17-inch, Intel i5, 8gb Ram, 256Gb SSD',
  favourite: false,
  id: 5,
  price: 10000,
  title: 'MacBook Pro',
  updated_at: '2020-10-19T07:54:49.510Z',
  user_id: 1,
}, {
  category: 'Laptops2',
  cost: 8000,
  created_at: '2020-10-19T07:54:49.510Z',
  description: '17-inch, Intel i5, 8gb Ram, 256Gb SSD',
  favourite: false,
  id: 5,
  price: 10000,
  title: 'MacBook Pro',
  updated_at: '2020-10-19T07:54:49.510Z',
  user_id: 1,
}];

const mockStore = configureStore();
const store = mockStore();

describe('dataActions tests', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('setFavourites', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          favourites: favouritesTemplate,
          type: 'SET_FAVOURITES',
        },
      ];

      store.dispatch(setFavourites(favouritesTemplate));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('setTeches', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          teches: techesTemplate,
          type: 'SET_TECHES',
        },
      ];

      store.dispatch(setTeches(techesTemplate));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
