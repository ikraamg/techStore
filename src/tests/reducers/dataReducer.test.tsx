import dataReducer from '../../redux/reducers/dataReducer';

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

describe('dataReducer', () => {
  describe('INITIAL_STATE', () => {
    test('returns initial state', () => {
      const action = { type: 'dummy_action' };
      const initialState = {};

      expect(dataReducer(undefined, action)).toEqual(initialState);
    });

    describe('SET_TECHES', () => {
      test('returns the changed state', () => {
        const action = { type: 'SET_TECHES', teches: techesTemplate };
        const expectedState = { teches: techesTemplate };

        expect(dataReducer(undefined, action)).toEqual(expectedState);
      });
    });

    describe('SET_FAVOURITES', () => {
      test('returns the changed state', () => {
        const action = { type: 'SET_FAVOURITES', favourites: favouritesTemplate };
        const expectedState = { favourites: favouritesTemplate };

        expect(dataReducer(undefined, action)).toEqual(expectedState);
      });
    });
  });
});
