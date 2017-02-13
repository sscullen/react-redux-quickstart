import React from 'react'
import { render } from 'react-dom'

import { Header } from './components/Header'
import { Home } from './components/Home'

class App extends React.Component {
    onGreet(e, customGreeting) {
        alert("hello! " + customGreeting)
        console.log(e)
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink="Home" otherLink={34} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home name={"Shaun"} initialAge={31} eventOnGreet={this.onGreet} />

                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));
