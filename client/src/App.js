import React from 'react';
import './App.css';
import Landing from './components/Landing';
import { Provider } from 'react-redux';
import store from './store';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
    <Provider store={store}>
      <Landing />
    </Provider>
  );
};

export default App;
