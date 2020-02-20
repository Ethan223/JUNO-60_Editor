import React from 'react';

const Dco: React.FC = () => {
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

export default Dco;