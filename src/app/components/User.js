import React from 'react'
import { browserHistory } from 'react-router'

export class User extends React.Component {
    constructor(props) {
        super()
        this.state = {
            dynamicClass: props.route.cssClass
        }
    }


    onNavigateHome() {
        browserHistory.push('/home')
    }

    componentWillReceiveProps(nextProps) {
        console.log('-------------- LIFE CYCLE: Comp will receive props', nextProps)
    }

    render () {
        return (
            <div className={this.state.dynamicClass}>
                <h3>The User Page</h3>
                <p>User ID: {this.props.params.id} </p>
                <button className="btn btn-primary" onClick={this.onNavigateHome}>Go Home!</button>
            </div>
        )
    }
}