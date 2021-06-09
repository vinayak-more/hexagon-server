import React from "react";
import Login from "./components/Login";
import ProtectedRoute from "./components/common/protected.route";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute path="/" component={Layout} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
