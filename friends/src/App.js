import React from 'react';
import { Route, Link, Switch } from "react-router-dom";

// Styling
import './App.css';

// Components
import Login from './components/login';
import PrivateRoute from './components/PrivateRoute';
import FriendList from './components/friendList';

function App() {

  const logout = (e) => {
    e.preventDefault();
    localStorage.remove('token');
    window.location.href = '/login';
  }

  return (
    <div className="App">
      <nav className="nav">
        <Link to="/login">Home</Link>
        <Link to="/friendsProtected">Friends</Link>
      </nav>
      <Switch>
        <PrivateRoute exact path="/friendsProtected" component={FriendList} />
        <Route path="/login" component={Login} />
      </Switch>
      <footer>
        <button onClick={logout}>Logout</button>
      </footer>
    </div>
  );
}

export default App;
