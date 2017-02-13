import React from 'react'

export class Home extends React.Component {
    constructor(props) {
        super()
        this.state = {
            age: props.initialAge,
            status: 0,
            greeting: 'Default greeting',
            homeLink: props.initialLinkName

        }

        setTimeout(() => {
            this.setState({
                status: 1
            })
        }, 3000)

        console.log("Home Constructor")
    }

    // life cycle methods

    componentWillMount() {
        console.log("-------------- LIFE CYCLE: Component will Mount!")
    }

    componentDidMount() {
        console.log('-------------- LIFE CYCLE: Component DID MOUNT!')
    }

    componentWillReceiveProps(nextProps) {
        console.log('-------------- LIFE CYCLE: Comp will receive props', nextProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('-------------- LIFE CYCLE: Should comp update?', nextProps, nextState)
        // WARNING: this will block ALL state updates, not just status.
        // if (nextState.status === 1)
        //     return false

        return true
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('-------------- LIFE CYCLE: Component WILL update', nextProps, nextState)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('-------------- LIFE CYCLE: Component DID update', prevProps, prevState)
    }

    componentWillUnmount() {
        console.log('-------------- LIFE CYCLE: WARNING, component will unmount!')
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

    onHandleChange(event) {

        this.setState({
            homeLink: event.target.value
        }, () => {
            this.props.changeLinkName(event, this.state.homeLink)
        })

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
                <input type="text" value={ this.state.homeLink } onChange={(e) => this.onHandleChange(e)}/>
                <button className="btn btn-primary" onClick={(e) => this.onChangeLink(e) }>Change Header Link</button>

            </div>
        )
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    eventOnGreet: React.PropTypes.func,
    initialLinkName: React.PropTypes.string
}