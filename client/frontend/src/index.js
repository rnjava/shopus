import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import './bootstrap.min.css'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals';

import Tracker from '@openreplay/tracker';

const tracker = new Tracker({
  projectKey: "dF4xKmx6B8Dwvt7scxVc",
  ingestPoint: "https://opensre.us/ingest",
});
tracker.start();

tracker.setUserID('rnjava@gmail.com');

tracker.setMetadata('environment', 'POC');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
