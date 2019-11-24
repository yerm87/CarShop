import React from "react";
import { Switch, Route } from "react-router-dom";
import Toolbar from './containers/toolbar/Toolbar';
import NavigationItems from './components/navigationItems/NavigationItems';
import Logo from './components/UIElements/logo/Logo';
import MainPage from './containers/main_page/Main_page';
import SellCarPage from './containers/sellCarPage/SellCarPage';
import SignUpPage from './containers/signUpPage/Signup_page';

const App = () => {
    return (
        <React.Fragment>
            <Toolbar>
                <Logo />
                <NavigationItems />
            </Toolbar>
            <Switch>
                <Route path="/sell_car" component={SellCarPage} />
                <Route path="/signup" component={SignUpPage} />
                <Route path="/" component={MainPage} />
            </Switch>
        </React.Fragment>
    )
}

export default App;