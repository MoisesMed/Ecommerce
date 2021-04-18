import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom"

import Produto from './pages/produto/Produto'
import Login from './pages/login/Login'

const Routes = () => {
    return (
        <Switch>
            <Route path="/produto" component={Produto} />
            <Route path="/login" component={Login} />
            <Redirect from="*" to='produto' />
        </Switch>
    )
}
export default Routes;