import React from 'react';

const Hpf: React.FC = () => {
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
                        <input type="range" min="0" max="3" step="1" defaultValue="0"></input>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Hpf;