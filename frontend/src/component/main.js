import React from 'react'
import Header from './nav/header'
import { Switch, Route } from 'react-router-dom'
import Signin from './body/signin'
import Signup from './body/signup'

const Main = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route path='/signin' exact component={Signin} />
                <Route path='/signup' exact component={Signup} />
            </Switch>
        </div>
    )
}

export default Main
