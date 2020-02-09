import React, { Component } from 'react';
import logo from '../logo.png';
import './Juno60.css'

class Juno60 extends Component {
    render() {
        return(
        <div className="App">
            <h1>JUNO-60 Editor</h1>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
        );
    }
}

export default Juno60;