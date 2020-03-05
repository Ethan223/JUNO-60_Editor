import React, { useReducer } from 'react';
import './Juno60.css';
import Lfo, { LFOState } from './Lfo';
import Dco, { DCOState } from './Dco';
import Hpf, { HPFState } from './Hpf';
import Vcf, { VCFState } from './Vcf';
import Vca, { VCAState } from './Vca';
import Env, { ENVState } from './Env';
import Chorus, { ChorusState } from './Chorus';

type RootState = {
    LFO: LFOState,
    DCO: DCOState,
    HPF: HPFState
    VCF: VCFState,
    VCA: VCAState,
    ENV: ENVState,
    Chorus: ChorusState
}

enum StatePart {
    LFO = 'LFO', DCO = 'DCO', HPF = 'HPF', VCF = 'VCF', VCA = 'VCA', ENV = 'ENV', Chorus = 'Chorus',
}

const LFOUpdate = (update: LFOState) => ({ type: StatePart.LFO as StatePart.LFO, update });
const DCOUpdate = (update: DCOState) => ({ type: StatePart.DCO as StatePart.DCO, update });
const HPFUpdate = (update: HPFState) => ({ type: StatePart.HPF as StatePart.HPF, update });
const VCFUpdate = (update: VCFState) => ({ type: StatePart.VCF as StatePart.VCF, update });
const VCAUpdate = (update: VCAState) => ({ type: StatePart.VCA as StatePart.VCA, update });
const ENVUpdate = (update: ENVState) => ({ type: StatePart.ENV as StatePart.ENV, update });
const ChorusUpdate = (update: ChorusState) => ({ type: StatePart.Chorus as StatePart.Chorus, update });

type RootAction =
    ReturnType<typeof LFOUpdate> |
    ReturnType<typeof DCOUpdate> |
    ReturnType<typeof HPFUpdate> |
    ReturnType<typeof VCFUpdate> |
    ReturnType<typeof VCAUpdate> |
    ReturnType<typeof ENVUpdate> |
    ReturnType<typeof ChorusUpdate>;

function reducer(state: RootState, action: RootAction): RootState {
    switch (action.type) {
        case StatePart.LFO: return { ...state, LFO: action.update };
        case StatePart.DCO: return { ...state, DCO: action.update };
        case StatePart.HPF: return { ...state, HPF: action.update };
        case StatePart.VCF: return { ...state, VCF: action.update };
        case StatePart.VCA: return { ...state, VCA: action.update };
        case StatePart.ENV: return { ...state, ENV: action.update };
        case StatePart.Chorus: return { ...state, Chorus: action.update };
        default: return state;
    }
}

const initialState: RootState = {
    LFO: { } as LFOState,
    DCO: { } as DCOState,
    HPF: { } as HPFState,
    VCF: { } as VCFState,
    VCA: { } as VCAState,
    ENV: { } as ENVState,
    Chorus: { } as ChorusState,
};

const Juno60: React.FC = () =>  {
    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <div className="main">
            <h1>Roland JUNO-60 Editor</h1>
            <table className="board-comp">
                <thead>
                    <tr>
                        <th>LFO</th>
                        <th>DCO</th>
                        <th>HPF</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {/*LFO contents*/}
                        <td className="board-comp">
                            <Lfo onChange={state => dispatch(LFOUpdate(state))} />
                        </td>
                        {/* DCO contents */}
                        <td className="board-comp">
                            <Dco onChange={state => dispatch(DCOUpdate(state))} />
                        </td>
                        {/* HPF contents */}
                        <td className="board-comp">
                            <Hpf onChange={state => dispatch(HPFUpdate(state))} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <br/>
            <table className="board-comp">
                <thead>
                    <tr>
                        <th>VCF</th>
                        <th>VCA</th>
                        <th>ENV</th>
                        <th>CHORUS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {/* VCF contents */}
                        <td className="board-comp">
                            <Vcf onChange={state => dispatch(VCFUpdate(state))} />
                        </td>
                        {/* VCA contents */}
                        <td className="board-comp">
                            <Vca onChange={state => dispatch(VCAUpdate(state))} />
                        </td>
                        {/* ENV contents */}
                        <td className="board-comp">
                            <Env onChange={state => dispatch(ENVUpdate(state))} />
                        </td>
                        {/* CHORUS contents */}
                        <td className="checkbox">
                            <Chorus onChange={state => dispatch(ChorusUpdate(state))} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <br/>
            <div className="debug">
                <h2>Debug</h2>
                <pre>
                    {JSON.stringify(state, null, 2)}
                </pre>
            </div>
        </div>
    )
}

export default Juno60;
