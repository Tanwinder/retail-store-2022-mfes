import React from 'react';
import { createRoot } from 'react-dom/client';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store } from './store/store';
// import { ConnectedRouter } from 'react-router-redux';

import App from './App';

// const store = configureStore(); // createRoot(container!) if you use TypeScript
// root.render(
//   // <Provider store={store}>
//   //   <ConnectedRouter history={history} store={store}>
//   //     <App />
//   //   </ConnectedRouter>
//   // </Provider>,
//   <div>
//     <App />
//   </div>,
// );

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

serviceWorker.unregister();
