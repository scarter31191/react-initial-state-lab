import React from 'react';

 class Bomb extends React.Component {

    constructor(prop) { //props that the component gets from its parent
        super()
        this.state = {//define initial state with a key of 'someKey' set to the 'someValue' prop
            secondsLeft: prop.initialCount
        }
    }

    render() {
        const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
        return (
            <h1>{message}</h1>
        )
    }
}

export default Bomb;