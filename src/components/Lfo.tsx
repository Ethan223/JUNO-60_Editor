import React, { useState, useEffect } from 'react';
import { LfoTriggerMode } from '../enums/Enums';

export interface LFOState {
    LFO_RATE: number;
    LFO_DELAY: number;
    TRIG_MODE: LfoTriggerMode;
}

interface LFOProps {
    onChange: (state: LFOState) => void;
}

const Lfo: React.FC<LFOProps> = (props) => {
    const [state, setState] = useState<LFOState>({LFO_RATE: 0, LFO_DELAY: 0, TRIG_MODE: LfoTriggerMode.AUTO});
    
    const updateStateHandler = (key: keyof LFOState) => (ev: React.ChangeEvent<HTMLInputElement>) => {
        const nextState = {...state, [key]: Number(ev.target.value)};
        setState(nextState);
        props.onChange(nextState);
    }

    // When component is initialized, run this only once ([])
    useEffect(() => props.onChange(state), []);

    return(
        <table>
            <thead>
                <tr>
                    <td>RATE</td>
                    <td>DELAY<br/>TIME</td>
                    <td>TRIG<br/>MODE</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input type="range" min="0" max="10" step="0.5" value={state.LFO_RATE} onChange={updateStateHandler("LFO_RATE")}/>
                    </td>
                    <td>
                        <input type="range" min="0" max="10" step="0.5" value={state.LFO_DELAY} onChange={updateStateHandler("LFO_DELAY")}/>
                    </td>
                    <td className="radioButton">
                        <input type="radio" name="trigMode" value={LfoTriggerMode.AUTO} checked={state.TRIG_MODE === LfoTriggerMode.AUTO} onChange={updateStateHandler("TRIG_MODE")}/>AUTO<br/>
                        <input type="radio" name="trigMode" value={LfoTriggerMode.MAN} checked={state.TRIG_MODE === LfoTriggerMode.MAN} onChange={updateStateHandler("TRIG_MODE")}/>MAN<br/>
                    </td>
                </tr> 
            </tbody>
        </table>
    )
}

export default Lfo;