import React from 'react';
import picture from './images/pineapple.jpg'

class Surprise extends React.Component {


    constructor() {
        super();
        this.state = {
            joke: null
        }
        this.surpriseJoke = this.surpriseJoke.bind(this);
    }

    surpriseJoke() {
        fetch('https://icanhazdadjoke.com/', {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        })
            .then(response => response.json())
            .then(json => {
                this.setState({ joke: json.joke })
            })
    }

    render() {

        return (
            <div>
                <div className="surprise-picture">
                <img src={picture} alt="pineapple"></img>
                </div>
                <button onClick={this.surpriseJoke}>Click me!</button>
                <p>{this.state.joke}</p>
            </div>
        )
    }

};

export default Surprise;