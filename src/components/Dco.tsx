import React, { useState } from 'react';
import { PwmType } from '../enums/Enums';

interface DCOState {
    LFO_MOD: number;
    PWM: number;
    PWM_TYPE: PwmType;
    DCO_SQUARE: boolean;
    DCO_SAW: boolean;
    DCO_SUB: boolean;
    DCO_SUBOSC: number;
    DCO_NOISE: number;
}

interface DCOProps {
    onChange: (state: DCOState) => void;
}

const Dco: React.FC<DCOProps> = (props) => {
    const [state, setState] = useState<DCOState>({
        LFO_MOD: 0,
        PWM: 0,
        PWM_TYPE: PwmType.MAN,
        DCO_SQUARE: false,
        DCO_SAW: true,
        DCO_SUB: false,
        DCO_SUBOSC: 0,
        DCO_NOISE: 0
    });

    const updateStateHandler = (key: keyof DCOState) => (ev: React.ChangeEvent<HTMLInputElement>) => {
        setState({...state, [key]: Number(ev.target.value)});
    }
    props.onChange(state);

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