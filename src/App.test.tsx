import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

import rootReducer from './redux/reducers/rootReducer';

const store = createStore(rootReducer);

test('renders without crashing', () => {
  const { baseElement } = render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  expect(baseElement).toBeDefined();
});
