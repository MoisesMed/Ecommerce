import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom"

import Login from './pages/login/Login'
import Compra from './pages/compra/Compra'

const Routes = () => {
    return (
        <Switch>
            <Route path="/compra" component={Compra} />
            <Route path="/login" component={Login} />
            <Redirect from="*" to='compra' />
        </Switch>
    )
}
export default Routes;