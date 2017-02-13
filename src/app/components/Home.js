import React from 'react'

export class Home extends React.Component {
    constructor(props) {
        super()
        this.state = {
            age: props.initialAge,
            status: 0,
            greeting: 'Default greeting',
            homeLink: "changed link"

        }

        setTimeout(() => {
            this.setState({
                status: 1
            })
        }, 3000)
    }

    onMakeOlder(e) {
        this.setState({
            age: this.state.age + 3
        })

        console.log(e)
        console.log(this.state.age)
    }

    onMakeYounger(e) {
        this.setState({
            age: this.state.age - 3
        })

        console.log(e)
        console.log(this.state.age)
    }

    onChangeLink(e) {
        this.props.changeLinkName(e, this.state.homeLink)
        console.log(e)
    }

    render() {

        return (
            <div>
                <p>In a new component!</p>

                <p>Your name is {this.props.name}, your age is { this.state.age } </p>
                <p>Status: {this.state.status}</p>
                <hr/>
                <button className="btn btn-primary" onClick={this.onMakeOlder.bind(this)}>Make me older!</button>
                <button className="btn btn-primary" onClick={(e) => this.onMakeYounger(e)}>Make me younger!</button>
                <hr/>
                <button className="btn btn-primary" onClick={(e) => this.props.eventOnGreet(e, this.state.greeting)}>Greet!</button>
                <hr/>
                <button className="btn btn-primary" onClick={(e) => this.onChangeLink(e) }>Change Header Link</button>

            </div>
        )
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    eventOnGreet: React.PropTypes.func
}