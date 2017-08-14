import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Landing from './../comps/Landing'
import Passport from './../comps/Passport'
import Currency from './../comps/Currency'

export default(
    <Switch>
         <Route component = {Landing} exact path = '/' /> 
            {/* //home page */}
        <Route component = {Passport} path = '/passport' />
            {/* //about page */}
        <Route component = {Currency} path = '/currency' />
            {/* //contact page */}
    </Switch>
)
