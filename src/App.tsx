import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AccountInfo from 'pages/AccountInfo'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" render={() => <AccountInfo/>} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
