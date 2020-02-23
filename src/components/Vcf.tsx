import React from 'react';

const Vcf: React.FC = () => {
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
                        <input type="range" min="0" max="10" step="0.5" defaultValue="10"/>
                    </td>
                    <td>
                        <input type="range" min="0" max="10" step="0.5" defaultValue="0"/>
                    </td>
                    <td className="radioButton">
                        <input type="radio" name="envPolarity" value="pos" checked/>+<br/>
                        <input type="radio" name="envPolarity" value="neg"/>-<br/>
                    </td>
                    <td>
                        <input type="range" min="0" max="10" step="0.5" defaultValue="0"/>
                    </td>
                    <td>
                        <input type="range" min="0" max="10" step="0.5" defaultValue="0"/>
                    </td>
                    <td>
                        <input type="range" min="0" max="10" step="0.5" defaultValue="0"/>
                    </td>
                </tr>
            </tbody>
        </table>
    ) 
}

export default Vcf;