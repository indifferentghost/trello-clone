import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorHandler } from '@/shared/error';
import store from './store';

const render = async () => {
  const App = await import('./App').then(app => app.default);

  ReactDOM.render(
    <ErrorHandler>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </ErrorHandler>,
    document.getElementById('root'),
  );
};

render();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App', render);
}
