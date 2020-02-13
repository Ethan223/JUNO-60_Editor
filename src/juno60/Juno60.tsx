import React, { Component } from 'react';
import './Juno60.css'

class Juno60 extends Component {
    render() {
        return(
            <div className="App">
                <h1>JUNO-60 Editor</h1>
                <table className="main-board">
                    <tr>
                        <th>LFO</th>
                        <th>DCO</th>
                        <th>HPF</th>
                    </tr>
                    <tr>
                        {/*LFO contents*/}
                        <td className="main-board">
                            {this.renderLFO()}
                        </td>
                        {/* DCO contents */}
                        <td className="main-board">
                            {this.renderDCO()}
                        </td>
                        {/* HPF contents */}
                        <td className="main-board">
                            {this.renderHPF()}            
                        </td>        
                    </tr>
                </table>
                <br/>
                <table className="main-board">
                    <tr>
                        <th>VCF</th>
                        <th>VCA</th>
                        <th>ENV</th>
                        <th>CHORUS</th>
                    </tr>
                    <tr>
                        {/* VCF contents */}
                        <td className="main-board">
                            {this.renderVCF()}
                        </td>
                        {/* VCA contents */}
                        <td className="main-board">
                            {this.renderVCA()} 
                        </td>
                        {/* ENV contents */}
                        <td className="main-board">
                            {this.renderENV()}  
                        </td>
                        {/* CHORUS contents */}
                        <td className="chorus">
                            {this.renderCHORUS()} 
                        </td>
                    </tr> 
                </table>
            </div>
        );
    }

    renderLFO(): JSX.Element {
        return(
            <table>
                <tr>
                    <td>RATE</td>
                    <td>DELAY TIME</td>
                    <td>TRIG MODE</td>
                </tr>
                <tr>
                    <td>
                        <input type="range" min="0" max="10" step="0.5" defaultValue="0"></input>
                    </td>
                    <td>
                        <input type="range" min="0" max="10" step="0.5" defaultValue="0"></input>
                    </td>
                    <td className="radioButton">
                        <input type="radio" name="trigMode" value="auto"></input>AUTO<br></br>
                        <input type="radio" name="trigMode" value="man"></input>MAN<br></br>
                    </td>
                </tr> 
            </table>
        )
    }

    renderDCO(): JSX.Element {
        return(
            <table>
                <tr>
                    <td>LFO</td>
                    <td>PWM</td>
                    <td></td>
                    <td>SQU&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SAW&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SUB</td>
                    <td>SUB OSC</td>
                    <td>NOISE</td>
                </tr>
                <tr>
                    <td>
                        <input type="range" min="0" max="10" step="0.5" defaultValue="0"></input>
                    </td>
                    <td>
                        <input type="range" min="0" max="10" step="0.5" defaultValue="0"></input>
                    </td>
                    <td className="radioButton">
                        <input type="radio" name="pulseWidthMod" value="lfo"></input>LFO<br></br>
                        <input type="radio" name="pulseWidthMod" value="manual"></input>MAN<br></br>
                        <input type="radio" name="pulseWidthMod" value="env"></input>ENV<br></br>
                    </td>
                    <td className="chorus">
                        <input type="checkbox"></input>
                        <input type="checkbox"></input>
                        <input type="checkbox"></input>
                    </td>
                    <td>
                        <input type="range" min="0" max="10" step="0.5" defaultValue="0"></input>
                    </td>
                    <td>
                        <input type="range" min="0" max="10" step="0.5" defaultValue="0"></input>
                    </td>
                </tr>
            </table>
        )
    }

    renderHPF(): JSX.Element {
        return(
            <table>
                <tr>
                    <td>FREQ</td> 
                </tr>
                <tr>
                    <td>
                        <input type="range" min="0" max="3" step="1" defaultValue="0"></input>
                    </td>
                </tr>
            </table>
        )
    }

    renderVCF(): JSX.Element {
        return(
            <table>
                <tr>
                    <td>FREQ</td>
                    <td>RES</td>
                    <td>-</td>
                    <td>ENV</td>
                    <td>LFO</td>
                    <td>KYBD</td>
                </tr>
                <tr>
                    <td>
                        <input type="range" min="0" max="10" step="0.5" defaultValue="0"></input>
                    </td>
                    <td>
                        <input type="range" min="0" max="10" step="0.5" defaultValue="0"></input>
                    </td>
                    <td className="radioButton">
                        <input type="radio" name="envPolarity" value="pos"></input>+<br></br>
                        <input type="radio" name="envPolarity" value="neg"></input>-<br></br>
                    </td>
                    <td>
                        <input type="range" min="0" max="10" step="0.5" defaultValue="0"></input>
                    </td>
                    <td>
                        <input type="range" min="0" max="10" step="0.5" defaultValue="0"></input>
                    </td>
                    <td>
                        <input type="range" min="0" max="10" step="0.5" defaultValue="0"></input>
                    </td>
                </tr>
            </table>
        ) 
    }

    renderVCA(): JSX.Element {
        return(
            <table>
                <tr>
                    <td>-</td>
                    <td>LEVEL</td>
                </tr>
                <tr>
                    <td className="radioButton">
                        <input type="radio" name="vca" value="env"></input>ENV<br></br>
                        <input type="radio" name="vca" value="gate"></input>GATE<br></br>
                    </td>
                    <td>
                        <input type="range" min="0" max="10" step="0.5" defaultValue="0"></input>
                    </td>
                </tr>
            </table>
        )
    }

    renderENV(): JSX.Element {
        return(
            <table>
                <tr>
                    <td>A</td>
                    <td>D</td>
                    <td>S</td>
                    <td>R</td>
                </tr>
                <tr>
                    <td>
                        <input type="range" min="0" max="10" step="0.5" defaultValue="0"></input>
                    </td>
                    <td>
                        <input type="range" min="0" max="10" step="0.5" defaultValue="0"></input>
                    </td>
                    <td>
                        <input type="range" min="0" max="10" step="0.5" defaultValue="0"></input>
                    </td>
                    <td>
                        <input type="range" min="0" max="10" step="0.5" defaultValue="0"></input>
                    </td>  
                </tr> 
            </table>
        )
    }

    renderCHORUS(): JSX.Element {
        return(
            <table>
                <tr>
                    <td>OFF</td>
                    <td>I</td>
                    <td>II</td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox"></input>
                    </td>
                    <td>
                        <input type="checkbox"></input>
                    </td>
                    <td>
                        <input type="checkbox"></input>
                    </td>
                </tr>
            </table>
        )
    }
}

export default Juno60;