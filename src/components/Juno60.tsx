import React from 'react';
import './Juno60.css'
import Lfo from './Lfo';
import Dco from './Dco';
import Hpf from './Hpf';

const Juno60: React.FC = () =>  {
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
                            <Lfo onChange={ state => console.log(state) } />
                        </td>
                        {/* DCO contents */}
                        <td className="board-comp">
                            <Dco />
                        </td>
                        {/* HPF contents */}
                        <td className="board-comp">
                            <Hpf />
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
                            <VCF />
                        </td>
                        {/* VCA contents */}
                        <td className="board-comp">
                            <VCA />
                        </td>
                        {/* ENV contents */}
                        <td className="board-comp">
                            <ENV />
                        </td>
                        {/* CHORUS contents */}
                        <td className="chorus">
                            <CHORUS />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
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