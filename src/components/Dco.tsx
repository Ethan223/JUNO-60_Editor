import React, { useState, useEffect } from 'react';
import { PwmType } from '../enums/Enums';

export interface DCOState {
    LFO_MOD: number;
    PWM: number;
    PWM_TYPE: PwmType;
    DCO_PULSE: boolean;
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
        DCO_PULSE: false,
        DCO_SAW: true,
        DCO_SUB: false,
        DCO_SUBOSC: 0,
        DCO_NOISE: 0
    });

    const updateStateHandler = (key: keyof DCOState) => (ev: React.ChangeEvent<HTMLInputElement>) => {
        if (key === 'DCO_PULSE' || key === 'DCO_SAW' || key === 'DCO_SUB') {
            const nextState = {...state, [key]: ev.target.checked};
            setState(nextState);
            props.onChange(nextState);
        }
        else {
            const nextState = {...state, [key]: Number(ev.target.value)};
            setState(nextState);
            props.onChange(nextState);
        }
    }
    
    useEffect(() => props.onChange(state), []);

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
                        <input type="range" min="0" max="10" step="0.5" value={state.LFO_MOD} onChange={updateStateHandler("LFO_MOD")}></input>
                    </td>
                    <td>
                        <input type="range" min="0" max="10" step="0.5" value={state.PWM} onChange={updateStateHandler("PWM")}></input>
                    </td>
                    <td className="radioButton">
                        <input type="radio" name="pulseWidthMod" value={PwmType.LFO} checked={state.PWM_TYPE === PwmType.LFO} onChange={updateStateHandler("PWM_TYPE")}/>LFO<br/>
                        <input type="radio" name="pulseWidthMod" value={PwmType.MAN} checked={state.PWM_TYPE === PwmType.MAN} onChange={updateStateHandler("PWM_TYPE")}/>MAN<br/>
                        <input type="radio" name="pulseWidthMod" value={PwmType.ENV} checked={state.PWM_TYPE === PwmType.ENV} onChange={updateStateHandler("PWM_TYPE")}/>ENV<br/>
                    </td>
                    <td className="checkbox">
                        <input type="checkbox" checked={state.DCO_PULSE === true} onChange={updateStateHandler("DCO_PULSE")}/>
                        <input type="checkbox" checked={state.DCO_SAW === true} onChange={updateStateHandler("DCO_SAW")}/>
                        <input type="checkbox" checked={state.DCO_SUB === true} onChange={updateStateHandler("DCO_SUB")}/>
                    </td>
                    <td>
                        <input type="range" min="0" max="10" step="0.5" value={state.DCO_SUBOSC} onChange={updateStateHandler("DCO_SUBOSC")}/>
                    </td>
                    <td>
                        <input type="range" min="0" max="10" step="0.5" value={state.DCO_NOISE} onChange={updateStateHandler("DCO_NOISE")}/>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Dco;