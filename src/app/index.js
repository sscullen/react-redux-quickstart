import React from 'react'
import { render } from 'react-dom'

import { Header } from './components/Header'
import { Home } from './components/Home'

class App extends React.Component {
    constructor(props) {
        super()

        this.state = {
            homeLink: "Home",
            homeMounted: true
        }
    }

    onGreet(e, customGreeting) {
        alert("hello! " + customGreeting)
        console.log(e)
    }

    onChangeLinkName(e, newLinkName) {
        this.setState({
            homeLink: newLinkName,

        })
    }

    onChangeHomeMounted() {
        this.setState({
            homeMounted: !this.state.homeMounted
        })
    }

    render() {
        let homeComp = ''

        if (this.state.homeMounted) {
            homeComp = (
                <Home name={"Shaun"}
                      initialAge={31}
                      eventOnGreet={this.onGreet}
                      changeLinkName={(e, newLink) => this.onChangeLinkName(e, newLink)}
                      initialLinkName={this.state.homeLink}  />
            )
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.state.homeLink} otherLink={34} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        { homeComp }

                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <button className="btn btn-primary" onClick={this.onChangeHomeMounted.bind(this)}>(un) mount Home Component</button>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));
