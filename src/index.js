import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';

const render = async () => {
  const App = await import('./App').then(app => app.default);

  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Suspense fallback={<span>Loading...</span>}>
          <App />
        </Suspense>
      </Router>
    </Provider>,
    document.getElementById('root'),
  );
};

render();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App', render);
}
