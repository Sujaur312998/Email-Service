import React from 'react'
import Header from './nav/header'
import { Switch, Route } from 'react-router-dom'
import Signin from './body/signin'
import Signup from './body/signup'
import HomePage from './body/homePage'

const Main = () => {

    return (
        <div>
            <Header />
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/signin' exact component={Signin} />
                <Route path='/signup' exact component={Signup} />
            </Switch>
        </div>
    )
}

export default Main
