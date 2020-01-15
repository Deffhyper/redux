import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'

import store from './redux/store'
import Posts from './components/Posts';
import Form from './components/Form';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Form />
          <Posts />
        </main>
      </div>
    </Provider>
  );
}

export default App;
