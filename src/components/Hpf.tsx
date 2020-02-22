import React, { useState } from 'react';

interface HPFState {
    HPF_CUTOFF: number;
}

interface HPFProps {
    onChange: (state: HPFState) => void;
}

const Hpf: React.FC<HPFProps> = (props) => {
    const [state, setState] = useState<HPFState>({
        HPF_CUTOFF: 0
    });

    const updateStateHandler = () => (ev: React.ChangeEvent<HTMLInputElement>) => {
        setState({ HPF_CUTOFF: Number(ev.target.value) });
    }
    props.onChange(state);

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
                        <input type="range" min="0" max="3" step="1" value={state.HPF_CUTOFF} onChange={updateStateHandler()}></input>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Hpf;