import React from "react"
import Home from "./home/Home"
import Signup from './user/Signup'
import Login from './user/Login'
import Survey from './survey/Survey'
import Board from './board/BoardPage'
import Menu from './cheese/Cheese'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Main: React.FC = () => {
    return <div>
        <BrowserRouter>
            <div className="main">
                <Switch>
                    <Route exact path="/" component = {Home}/>
                    <Route path="/signUp" component ={Signup} />
                    <Route path="/login" component ={Login} />
                    <Route path="/survey" component={Survey}/>
                    <Route path="/board" component = {Board}/>
                    <Route path="/menu" component={Menu}/>
                </Switch>
            </div>
        </BrowserRouter>
    </div>
}
export default Main