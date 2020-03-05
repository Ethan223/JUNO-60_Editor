import React, { useState, useEffect } from 'react';
import { VcfPolarity } from '../enums/Enums';

export interface VCFState {
    CUTOFF: number;
    RES: number;
    POLARITY: VcfPolarity;
    ENV_MOD: number;
    LFO_MOD: number;
    KYBD_MOD: number;
}

interface VCFProps {
    onChange: (state: VCFState) => void;
}

const Vcf: React.FC<VCFProps> = (props) => {
    const [state, setState] = useState<VCFState>({CUTOFF: 10, RES: 0, POLARITY: VcfPolarity.NORMAL, ENV_MOD: 0, LFO_MOD: 0, KYBD_MOD: 0});

    const updateStateHandler = (key: keyof VCFState) => (ev: React.ChangeEvent<HTMLInputElement>) => {
        const nextState = {...state, [key]: Number(ev.target.value)};
        setState(nextState);
        props.onChange(nextState);
    }
    
    useEffect(() => props.onChange(state), []);

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
                        <input type="range" min="0" max="10" step="0.5" value={state.CUTOFF} onChange={updateStateHandler("CUTOFF")}/>
                    </td>
                    <td>
                        <input type="range" min="0" max="10" step="0.5" value={state.RES} onChange={updateStateHandler("RES")}/>
                    </td>
                    <td className="radioButton">
                        <input type="radio" name="envPolarity" value={VcfPolarity.NORMAL} checked={state.POLARITY === VcfPolarity.NORMAL} onChange={updateStateHandler("POLARITY")}/>+<br/>
                        <input type="radio" name="envPolarity" value={VcfPolarity.INVERTED} checked={state.POLARITY === VcfPolarity.INVERTED} onChange={updateStateHandler("POLARITY")}/>-<br/>
                    </td>
                    <td>
                        <input type="range" min="0" max="10" step="0.5" value={state.ENV_MOD} onChange={updateStateHandler("ENV_MOD")}/>
                    </td>
                    <td>
                        <input type="range" min="0" max="10" step="0.5" value={state.LFO_MOD} onChange={updateStateHandler("LFO_MOD")}/>
                    </td>
                    <td>
                        <input type="range" min="0" max="10" step="0.5" value={state.KYBD_MOD} onChange={updateStateHandler("KYBD_MOD")}/>
                    </td>
                </tr>
            </tbody>
        </table>
    ) 
}

export default Vcf;