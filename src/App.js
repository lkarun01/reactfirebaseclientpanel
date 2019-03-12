import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';

import { Provider } from "react-redux";

import AppNavBar from "./components/layout/AppNavBar";
import Dashboard from "./components/layout/DashBoard";
import {store, rrfProps} from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router>
          <div className="App">
            <AppNavBar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Dashboard} />
              </Switch>
            </div>
          </div>
        </Router>
        </ReactReduxFirebaseProvider>
      </Provider>
    );
  }
}

export default App;
