import React from 'react';

const Env: React.FC = () => {
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
                        <input type="range" min="0" max="10" step="0.5" defaultValue="0"/>
                    </td>
                    <td>
                        <input type="range" min="0" max="10" step="0.5" defaultValue="0"/>
                    </td>
                    <td>
                        <input type="range" min="0" max="10" step="0.5" defaultValue="10"/>
                    </td>
                    <td>
                        <input type="range" min="0" max="10" step="0.5" defaultValue="0"/>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Env;