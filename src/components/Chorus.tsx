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

    props.onChange(state);

    // TODO: Both I and II type
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
                        <input type="checkbox" checked={state.CHORUS === ChorusType.OFF} onChange={() => setState({CHORUS: ChorusType.OFF})}/>
                    </td>
                    <td>
                        <input type="checkbox" checked={state.CHORUS === ChorusType.I} onChange={() => setState({CHORUS: ChorusType.I})}/>
                    </td>
                    <td>
                        <input type="checkbox" checked={state.CHORUS === ChorusType.II} onChange={() => setState({CHORUS: ChorusType.II})}/>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Chorus;