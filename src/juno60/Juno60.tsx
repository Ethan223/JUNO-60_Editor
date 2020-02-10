import React, { Component } from 'react';
import logo from '../logo.png';
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
                            <table>
                                <tr>
                                    <td>RATE</td>
                                    <td>DELAY TIME</td>
                                    <td>TRIG MODE</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <mat-slider vertical min="0" max="10" step="1" value="0"></mat-slider> */}
                                    </td>
                                    <td>
                                        {/* <mat-slider vertical min="0" max="10" step="1" value="0"></mat-slider> */}
                                    </td>
                                    <td>
                                        {/* <mat-radio-group aria-label="lfoTriggerMode">
                                            <mat-radio-button class="radio-button" value="auto" checked="true">AUTO</mat-radio-button>
                                            <mat-radio-button class="radio-button" value="manual">MAN</mat-radio-button>
                                        </mat-radio-group> */}
                                    </td>
                                </tr> 
                            </table>
                        </td>
                        {/* DCO contents */}
                        <td className="main-board">
                            <table>
                                <tr>
                                    <td>LFO</td>
                                    <td>PWM</td>
                                    <td></td>
                                    <td></td>
                                    <td>SUB OSC</td>
                                    <td>NOISE</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <mat-slider vertical min="0" max="10" step="1" value="0"></mat-slider> */}
                                    </td>
                                    <td>
                                        {/* <mat-slider vertical min="0" max="10" step="1" value="0"></mat-slider> */}
                                    </td>
                                    <td>
                                        {/* <mat-radio-group aria-label="pulseWidthMod">
                                            <mat-radio-button class="radio-button" value="lfo">LFO</mat-radio-button>
                                            <mat-radio-button class="radio-button" value="manual" checked="true">MAN</mat-radio-button>
                                            <mat-radio-button class="radio-button" value="env">ENV</mat-radio-button>
                                        </mat-radio-group>                         */}
                                    </td>
                                    <td>
                                        {/* <mat-button-toggle>SQ</mat-button-toggle>
                                        <mat-button-toggle>SAW</mat-button-toggle>
                                        <mat-button-toggle>SUB</mat-button-toggle> */}
                                    </td>
                                    <td>
                                        {/* <mat-slider vertical min="0" max="10" step="1" value="0"></mat-slider> */}
                                    </td>
                                    <td>
                                        {/* <mat-slider vertical min="0" max="10" step="1" value="0"></mat-slider> */}
                                    </td>
                                </tr>
                            </table>
                        </td>
                        {/* HPF contents */}
                        <td className="main-board">
                            <table>
                                <tr>
                                <td>FREQ</td> 
                                </tr>
                                <tr>
                                    <td>
                                        {/* <mat-slider vertical min="0" max="3" step="1" value="0"></mat-slider> */}
                                    </td>
                                </tr>
                            </table>            
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
                                        {/* <mat-slider vertical min="0" max="10" step="1" value="0"></mat-slider> */}
                                    </td>
                                    <td>
                                        {/* <mat-slider vertical min="0" max="10" step="1" value="0"></mat-slider> */}
                                    </td>
                                    <td>
                                        {/* <mat-radio-group aria-label="envPolarity">
                                            <mat-radio-button class="radio-button" value="1" checked="true">P</mat-radio-button>
                                            <mat-radio-button class="radio-button" value="2">N</mat-radio-button>
                                        </mat-radio-group>*/}
                                    </td>
                                    <td>
                                        {/* <mat-slider vertical min="0" max="10" step="1" value="0"></mat-slider> */}
                                    </td>
                                    <td>
                                        {/* <mat-slider vertical min="0" max="10" step="1" value="0"></mat-slider> */}
                                    </td>
                                    <td>
                                        {/* <mat-slider vertical min="0" max="10" step="1" value="0"></mat-slider> */}
                                    </td>
                                </tr>
                            </table>
                        </td>
                        {/* VCA contents */}
                        <td className="main-board">
                            <table>
                                <tr>
                                    <td>-</td>
                                    <td>LEVEL</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <mat-radio-group aria-label="lfoTriggerMode">
                                            <mat-radio-button class="radio-button" value="env" checked="true">E</mat-radio-button>
                                            <mat-radio-button class="radio-button" value="gate">G</mat-radio-button>
                                        </mat-radio-group> */}
                                    </td>
                                    <td>
                                        {/* <mat-slider vertical min="0" max="10" step="1" value="0"></mat-slider>  */}
                                    </td>
                                </tr>
                            </table>
                        </td>
                        {/* ENV contents */}
                        <td className="main-board">
                            <table>
                            <tr>
                                <td>A</td>
                                <td>D</td>
                                <td>S</td>
                                <td>R</td>
                            </tr>
                            <tr>
                                <td>
                                    {/* <mat-slider vertical min="0" max="10" step="1" value="0"></mat-slider> */}
                                </td>
                                <td>
                                    {/* <mat-slider vertical min="0" max="10" step="1" value="0"></mat-slider> */}
                                </td>
                                <td>
                                    {/* <mat-slider vertical min="0" max="10" step="1" value="0"></mat-slider> */}
                                </td>
                                <td>
                                    {/* <mat-slider vertical min="0" max="10" step="1" value="0"></mat-slider> */}
                                </td>  
                            </tr> 
                            </table>
                        </td>
                        {/* CHORUS contents */}
                        <td className="chorus">
                            <table>
                                <tr>
                                    <td>OFF</td>
                                    <td>I</td>
                                    <td>II</td>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <mat-button-toggle></mat-button-toggle> */}
                                    </td>
                                    <td>
                                        {/* <mat-button-toggle></mat-button-toggle> */}
                                    </td>
                                    <td>
                                        {/* <mat-button-toggle></mat-button-toggle> */}
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr> 
                </table>
            </div>
        );
    }
}

export default Juno60;