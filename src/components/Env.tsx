import React, { useState } from 'react';

interface ENVState {
    ATTACK: number;
    DECAY: number;
    SUSTAIN: number;
    RELEASE: number;
}

interface ENVProps {
    onChange: (state: ENVState) => void;
}

const Env: React.FC<ENVProps> = (props) => {
    const [state, setState] = useState<ENVState>({ATTACK: 0, DECAY: 0, SUSTAIN: 10, RELEASE: 0});

    const updateStateHandler = (key: keyof ENVState) => (ev: React.ChangeEvent<HTMLInputElement>) => {
        setState({...state, [key]: Number(ev.target.value)});
    }
    props.onChange(state);

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
                        <input type="range" min="0" max="10" step="0.5" value={state.ATTACK} onChange={updateStateHandler("ATTACK")}/>
                    </td>
                    <td>
                        <input type="range" min="0" max="10" step="0.5" value={state.DECAY} onChange={updateStateHandler("DECAY")}/>
                    </td>
                    <td>
                        <input type="range" min="0" max="10" step="0.5" value={state.SUSTAIN} onChange={updateStateHandler("SUSTAIN")}/>
                    </td>
                    <td>
                        <input type="range" min="0" max="10" step="0.5" value={state.RELEASE} onChange={updateStateHandler("RELEASE")}/>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Env;