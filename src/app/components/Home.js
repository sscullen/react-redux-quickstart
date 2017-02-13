import React from 'react'

export class Home extends React.Component {
    constructor(props) {
        super()
        this.age = props.age
    }

    onMakeOlder(e) {
        this.age += 3
        console.log(e)
        console.log(this.age)
    }

    onMakeYounger(e) {
        this.age -= 3
        console.log(e)
        console.log(this.age)
    }

    render() {

        return (
            <div>
                <p>In a new component!</p>

                <p>Your name is {this.props.name}, your age is { this.age } </p>
                <hr/>
                <button className="btn btn-primary" onClick={this.onMakeOlder.bind(this)}>Make me older!</button>
                <button className="btn btn-primary" onClick={(e) => this.onMakeYounger(e)}>Make me younger!</button>
                
            </div>
        )
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number,
}