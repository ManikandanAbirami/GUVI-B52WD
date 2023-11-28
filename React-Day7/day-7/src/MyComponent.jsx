import React, { Component } from 'react'

class MyComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    incrementCount = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1 }
        })
    };

    decrementCount = () => {
        this.setState(prevState => {
            return { count: prevState.count - 1 }
        })
    };

    render() {
        return (
            <div>
                <h2>Count: {this.state.count} - {this.props.name}</h2>
                <button onClick={this.incrementCount}>Increment</button>
                <button onClick={this.decrementCount}>Decrement</button>
            </div>
        )
    }
}

export default MyComponent