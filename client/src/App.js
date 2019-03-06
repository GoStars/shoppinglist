import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Container } from 'reactstrap';
import store from './store';
import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// components
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>

          <AppNavbar />

          <main>
            <Container>
              <ItemModal />
              <ShoppingList />
            </Container>
          </main>

          <footer>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </footer>
        </div>
      </Provider>
    );
  }
}

export default App;
