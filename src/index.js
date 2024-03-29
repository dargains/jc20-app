import React from 'react';
import ReactDOM from 'react-dom';
import 'react-slidedown/lib/slidedown.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './index.css';
import App from './App';
import { AppContextProvider } from './store.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('jc20')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
