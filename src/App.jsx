import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
//import Signup from './components/Signup';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/forgot-password" component={() => <p>Forgot Password</p>} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;