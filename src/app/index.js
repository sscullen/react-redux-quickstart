import React from 'react'
import { render } from 'react-dom'

import { Home } from './components/Home'
import { Root } from './components/Root'

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

            <Root>
                <Home></Home>
            </Root>

        );
    }
}

render(<App/>, window.document.getElementById("app"));
