import React, { useState, useEffect } from 'react';

export interface HPFState {
    HPF_CUTOFF: number;
}

interface HPFProps {
    onChange: (state: HPFState) => void;
}

const Hpf: React.FC<HPFProps> = (props) => {
    const [state, setState] = useState<HPFState>({
        HPF_CUTOFF: 0
    });
    
    const dispatchState = (state: HPFState) => {
        setState(state);
        props.onChange(state);
    }

    useEffect(() => props.onChange(state), []);

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
                        <input type="range" min="0" max="3" step="1" value={state.HPF_CUTOFF} onChange={(ev: React.ChangeEvent<HTMLInputElement>) => dispatchState({ HPF_CUTOFF: Number(ev.target.value) })}/>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Hpf;