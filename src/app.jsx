import React from "react";
import NavBar from "./components/navBar";
import { Route, Switch } from "react-router-dom";
import Main from "./components/layouts/main";
import Login from "./components/layouts/login";
import Users from "./components/layouts/users";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/users/:userId?" component={Users} />
                <Route path="/login" component={Login} />
                <Route exact path="/" component={Main} />
            </Switch>
        </div>
    );
}

export default App;
