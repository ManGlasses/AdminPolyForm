import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'
import './theme/css/clock.css'
import './theme/css/container.css'
import ClockContainer from './containers/ClockContainer'
import AlarmContainer from './containers/AlarmContainer'
import CounterListContainer from './containers/CounterListContainer'
import TodoContainer from './containers/Todo/TodoContainer'
import AdminPolyFormContainer from './containers/AdminPolyForm/AdminPolyFormContainer'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Alarm Clock</Link>
                        </li>
                        <li>
                            <Link to="/Clock">Clock</Link>
                        </li>
                        <li>
                            <Link to="/CounterList">Counter List</Link>
                        </li>
                        <li>
                            <Link to="/Todo">Todo List</Link>
                        </li>
                        <li>
                            <Link to="/AdminPolyForm">Admin Poly Form</Link>
                        </li>
                    </ul>
                    <Route
                        exact
                        path="/"
                        render={() => <Redirect to="/Alarm" />}
                    />
                    <Route exact path="/Alarm" component={AlarmContainer} />
                    <Route exact path="/Clock" component={ClockContainer} />
                    <Route
                        exact
                        path="/CounterList"
                        component={CounterListContainer}
                    />
                    <Route exact path="/Todo" component={TodoContainer} />
                    <Route
                        exact
                        path="/AdminPolyForm"
                        component={AdminPolyFormContainer}
                    />
                </div>
            </BrowserRouter>
        )
    }
}

export default App
