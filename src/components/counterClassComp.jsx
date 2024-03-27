import React, { Component } from 'react'

class CounterClassComp extends Component {
    // initial state of the component
    state = {
        count: 0
    }

    // increment method
    increment = () => {
        this.setState({ count: this.state.count + 1 });
    }

    // decrement method
    decrement = () => {
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1 });
        }
    }

    render() {
        return (
            <div className="d-flex justify-content-center">
                <i className="bi bi-file-minus-fill" type="button" onClick={this.decrement}></i>
                <p>{this.state.count}</p>
                <i className="bi bi-file-plus-fill" type="button" onClick={this.increment}></i>
            </div>
        );
    }
}

export default CounterClassComp;