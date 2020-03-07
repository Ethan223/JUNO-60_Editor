import React, { useState, useEffect } from 'react';
import { VcaRoute } from '../enums/Enums';

export interface VCAState {
    ROUTE: VcaRoute;
    LEVEL: number;
}

interface VCAProps {
    onChange: (state: VCAState) => void;
}

const Vca: React.FC<VCAProps> = (props) => {
    const [state, setState] = useState<VCAState>({ROUTE: VcaRoute.GATE, LEVEL: 0});

    const updateStateHandler = (key: keyof VCAState) => (ev: React.ChangeEvent<HTMLInputElement>) => {
        const nextState = {...state, [key]: Number(ev.target.value)};
        setState(nextState);
        props.onChange(nextState);
    }
    
    useEffect(() => props.onChange(state), []);

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
                        <input type="radio" name="vca" value={VcaRoute.ENV} checked={state.ROUTE === VcaRoute.ENV} onChange={updateStateHandler("ROUTE")}/>ENV<br/>
                        <input type="radio" name="vca" value={VcaRoute.GATE} checked={state.ROUTE === VcaRoute.GATE} onChange={updateStateHandler("ROUTE")}/>GATE<br/>
                    </td>
                    <td>
                        <input type="range" min="-5" max="5" step="0.5" value={state.LEVEL} onChange={updateStateHandler("LEVEL")}/>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Vca;