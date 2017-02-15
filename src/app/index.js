import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import { Home } from './components/Home'
import { Root } from './components/Root'
import { User } from './components/User'

class App extends React.Component {

    render() {

        return (
            // use browserHistory to make the browser handle requests for example.com/user instead of server
            <Router history={browserHistory}>
                <Route path={"/"} component={Root}>
                    {/*set up the default route*/}
                    <IndexRoute component={Home}/>
                    {/*to use sub routes, use the child property the parent component*/}
                     {/*each sub route is added as a child to the parent route*/}
                    <Route path={"user/:id"} component={User} cssClass="dark"/>
                    <Route path={"home"} component={Home}/>
                </Route>
                <Route path={"home-standalone"} component={Home}/>
            </Router>
        );
    }
}

render(<App/>, window.document.getElementById("app"));
