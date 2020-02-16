import React, { Component } from 'react';
import './Juno60.css'

class Juno60 extends Component {
    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target.value);
    }

    render() {
        return(
            <div className="main">
                <h1>Roland JUNO-60 Editor</h1>
                <table className="board-comp">
                    <thead>
                        <tr>
                            <th>LFO</th>
                            <th>DCO</th>
                            <th>HPF</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {/*LFO contents*/}
                            <td className="board-comp">
                                {this.renderLFO()}
                            </td>
                            {/* DCO contents */}
                            <td className="board-comp">
                                {this.renderDCO()}
                            </td>
                            {/* HPF contents */}
                            <td className="board-comp">
                                {this.renderHPF()}            
                            </td>        
                        </tr>
                    </tbody>
                </table>
                <br/>
                <table className="board-comp">
                    <thead>
                        <tr>
                            <th>VCF</th>
                            <th>VCA</th>
                            <th>ENV</th>
                            <th>CHORUS</th>
                        </tr>
                    </thead>                    
                    <tbody>
                        <tr>
                            {/* VCF contents */}
                            <td className="board-comp">
                                {this.renderVCF()}
                            </td>
                            {/* VCA contents */}
                            <td className="board-comp">
                                {this.renderVCA()} 
                            </td>
                            {/* ENV contents */}
                            <td className="board-comp">
                                {this.renderENV()}  
                            </td>
                            {/* CHORUS contents */}
                            <td className="chorus">
                                {this.renderCHORUS()} 
                            </td>
                        </tr>
                    </tbody>                     
                </table>
            </div>
        );
    }

    renderLFO(): JSX.Element {
        return(
            <table>
                <thead>
                    <tr>
                        <td>RATE</td>
                        <td>DELAY TIME</td>
                        <td>TRIG MODE</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="range" min="0" max="10" step="0.5" defaultValue="0" onChange={this.handleChange}></input>
                        </td>
                        <td>
                            <input type="range" min="0" max="10" step="0.5" defaultValue="0"></input>
                        </td>
                        <td className="radioButton">
                            <input type="radio" name="trigMode" value="auto" checked></input>AUTO<br></br>
                            <input type="radio" name="trigMode" value="man"></input>MAN<br></br>
                        </td>
                    </tr> 
                </tbody>
            </table>
        )
    }

    renderDCO(): JSX.Element {
        return(
            <table>
                <thead>
                    <tr>
                        <td>LFO</td>
                        <td>PWM</td>
                        <td></td>
                        <td>SQU&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SAW&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SUB</td>
                        <td>SUB OSC</td>
                        <td>NOISE</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="range" min="0" max="10" step="0.5" defaultValue="0"></input>
                        </td>
                        <td>
                            <input type="range" min="0" max="10" step="0.5" defaultValue="0"></input>
                        </td>
                        <td className="radioButton">
                            <input type="radio" name="pulseWidthMod" value="lfo"></input>LFO<br></br>
                            <input type="radio" name="pulseWidthMod" value="manual" checked></input>MAN<br></br>
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
                </tbody>
            </table>
        )
    }

    renderHPF(): JSX.Element {
        return(
            <table>
                <thead>
                    <tr>
                        <td>FREQ</td> 
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="range" min="0" max="3" step="1" defaultValue="0"></input>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }

    renderVCF(): JSX.Element {
        return(
            <table>
                <thead>
                    <tr>
                        <td>FREQ</td>
                        <td>RES</td>
                        <td>-</td>
                        <td>ENV</td>
                        <td>LFO</td>
                        <td>KYBD</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="range" min="0" max="10" step="0.5" defaultValue="10"></input>
                        </td>
                        <td>
                            <input type="range" min="0" max="10" step="0.5" defaultValue="0"></input>
                        </td>
                        <td className="radioButton">
                            <input type="radio" name="envPolarity" value="pos" checked></input>+<br></br>
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
                </tbody>
            </table>
        ) 
    }

    renderVCA(): JSX.Element {
        return(
            <table>
                <thead>
                    <tr>
                        <td>-</td>
                        <td>LEVEL</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="radioButton">
                            <input type="radio" name="vca" value="env"></input>ENV<br></br>
                            <input type="radio" name="vca" value="gate" checked></input>GATE<br></br>
                        </td>
                        <td>
                            <input type="range" min="0" max="10" step="0.5" defaultValue="5"></input>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }

    renderENV(): JSX.Element {
        return(
            <table>
                <thead>
                    <tr>
                        <td>A</td>
                        <td>D</td>
                        <td>S</td>
                        <td>R</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="range" min="0" max="10" step="0.5" defaultValue="0"></input>
                        </td>
                        <td>
                            <input type="range" min="0" max="10" step="0.5" defaultValue="0"></input>
                        </td>
                        <td>
                            <input type="range" min="0" max="10" step="0.5" defaultValue="10"></input>
                        </td>
                        <td>
                            <input type="range" min="0" max="10" step="0.5" defaultValue="0"></input>
                        </td>  
                    </tr> 
                </tbody>                
            </table>
        )
    }

    renderCHORUS(): JSX.Element {
        return(
            <table>
                <thead>
                    <tr>
                        <td>OFF</td>
                        <td>I</td>
                        <td>II</td>
                    </tr>
                </thead>
                <tbody>                
                    <tr>
                        <td>
                            <input type="checkbox" checked></input>
                        </td>
                        <td>
                            <input type="checkbox"></input>
                        </td>
                        <td>
                            <input type="checkbox"></input>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Juno60;