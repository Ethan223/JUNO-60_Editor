import React from 'react';
import './Juno60.css'
import Lfo from './Lfo';
import Dco from './Dco';
import Hpf from './Hpf';
import Vcf from './Vcf';
import Vca from './Vca';
import Env from './Env';
import Chorus from './Chorus';

const Juno60: React.FC = () =>  {
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
                            <Lfo onChange={state => console.log(state)} />
                        </td>
                        {/* DCO contents */}
                        <td className="board-comp">
                            <Dco onChange={state => console.log(state)} />
                        </td>
                        {/* HPF contents */}
                        <td className="board-comp">
                            <Hpf onChange={state => console.log(state)} />
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
                            <Vcf />
                        </td>
                        {/* VCA contents */}
                        <td className="board-comp">
                            <Vca />
                        </td>
                        {/* ENV contents */}
                        <td className="board-comp">
                            <Env />
                        </td>
                        {/* CHORUS contents */}
                        <td className="checkbox">
                            <Chorus />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Juno60;