import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import View from './components/View';
import Home from './components/Home';
import Layout from './components/Layout';
import './App.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/view">
            <View />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
