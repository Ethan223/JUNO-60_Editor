import React, { useState } from 'react';
import { ChorusType } from '../enums/Enums';

interface ChorusState {
    CHORUS: ChorusType;
}

interface ChorusProps {
    onChange: (state: ChorusState) => void;
}

const Chorus: React.FC<ChorusProps> = (props) => {
    const [state, setState] = useState<ChorusState>({
        CHORUS: ChorusType.OFF
    });

    const updateStateHandler = (type: ChorusType) => (ev: React.ChangeEvent<HTMLInputElement>) => {
        if ((state.CHORUS === ChorusType.I || state.CHORUS === ChorusType.II)) {
            setState({CHORUS: ChorusType.BOTH});
        }
        else {
            setState({CHORUS: type});
        }
    }

    props.onChange(state);

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
                        <input type="checkbox" checked={state.CHORUS === ChorusType.OFF} onChange={updateStateHandler(ChorusType.OFF)}/>
                    </td>
                    <td>
                        <input type="checkbox" checked={state.CHORUS === ChorusType.I || state.CHORUS === ChorusType.BOTH} onChange={updateStateHandler(ChorusType.I)}/>
                    </td>
                    <td>
                        <input type="checkbox" checked={state.CHORUS === ChorusType.II || state.CHORUS === ChorusType.BOTH} onChange={updateStateHandler(ChorusType.II)}/>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Chorus;