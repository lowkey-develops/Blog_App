import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Layout from './components/Layout/Layout';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
