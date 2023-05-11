import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import {Provider} from "react-redux";
import store, { persiststore } from "./store/store";
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persiststore}>
        <App />
      </PersistGate>
    </Provider>
    {/* <App /> */}
  </React.StrictMode>,
)