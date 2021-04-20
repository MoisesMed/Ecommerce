import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom"

import Compra from './pages/compra/Compra'

const Routes = () => {
    return (
        <Switch>
            <Route path="/compra" component={Compra} />
            <Redirect from="*" to='compra' />
        </Switch>
    )
}
export default Routes;