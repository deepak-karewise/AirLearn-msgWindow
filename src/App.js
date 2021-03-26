import React, { Component } from 'react';
import MenuBar from './MenuBar'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux';
import './App.css'
import store from './redux/store';
class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <MenuBar/>
      </Provider>
    )
  }
}
export default App;