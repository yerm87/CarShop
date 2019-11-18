import React from "react";
import { Switch, Route } from "react-router-dom";
import Toolbar from './containers/toolbar/Toolbar';
import NavigationItems from './components/navigationItems/NavigationItems';
import Logo from './components/UIElements/logo/Logo';

const App = () => {
    return (
        <React.Fragment>
            <Toolbar>
                <Logo />
                <NavigationItems />
            </Toolbar>
            <Switch>
               <Route path="/" render={() => {
                   return (
                       <div>Testing</div>
                   )
                }} />
            </Switch>
        </React.Fragment>
    )
}

export default App;