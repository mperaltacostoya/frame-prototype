import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import View from './components/View';
import ViewClean from './components/ViewClean';
import View2 from './components/View2';
import Home from './components/Home';
import HomeClean from './components/Home2';
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
          <Route path="/view-clean">
            <ViewClean />
          </Route>
          <Route path="/view2">
            <View2 />
          </Route>
          <Route path="/clean">
            <HomeClean />
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
