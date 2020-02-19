import React from 'react';
import { Patch } from '../models/patch';
import { LfoTriggerMode } from '../enums/LfoTriggerMode';
import { PwmType } from '../enums/PwmType';
import { VcfPolarity } from '../enums/VcfPolarity';
import { VcaRoute } from '../enums/VcaRoute';
import { ChorusType } from '../enums/ChorusType';
import './Juno60.css'

const Juno60: React.FC = () =>  {
    const currPatch = new Patch(0, 0, LfoTriggerMode.AUTO, 0, 0, PwmType.MAN, false, true, false, 0, 0, 0, 10, 0, VcfPolarity.NORMAL, 0, 0, 0, VcaRoute.GATE, 5, 0, 0, 10, 0, ChorusType.OFF);

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
                            {<LFO />}
                        </td>
                        {/* DCO contents */}
                        <td className="board-comp">
                            {<DCO />}
                        </td>
                        {/* HPF contents */}
                        <td className="board-comp">
                            {<HPF />}            
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
                            {<VCF />}
                        </td>
                        {/* VCA contents */}
                        <td className="board-comp">
                            {<VCA />} 
                        </td>
                        {/* ENV contents */}
                        <td className="board-comp">
                            {<ENV />}  
                        </td>
                        {/* CHORUS contents */}
                        <td className="chorus">
                            {<CHORUS />} 
                        </td>
                    </tr>
                </tbody>                     
            </table>
        </div>
    )
}

const LFO: React.FC = () => {
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
                        <input type="range" min="0" max="10" step="0.5" defaultValue="0"></input>
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

const DCO: React.FC = () => {
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

const HPF: React.FC = () => {
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

const VCF: React.FC = () => {
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

const VCA: React.FC = () => {
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

const ENV: React.FC = () => {
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

const CHORUS: React.FC = () => {
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

export default Juno60;