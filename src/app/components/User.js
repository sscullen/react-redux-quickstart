import React from 'react'

export class User extends React.Component {

    render () {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h1>The User Page</h1>
                    </div>
                </div>
                <div classname="row">
                    <div className="col-xs-12">
                        <p>User name: {this.props.username}</p>
                    </div>
                </div>
            </div>
        )
    }
}