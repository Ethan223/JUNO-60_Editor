import React from 'react';

const Vca: React.FC = () => {
    return(
        <table>
            <thead>
                <tr>
                    <td>-</td>
                    <td>LEVEL</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="radioButton">
                        <input type="radio" name="vca" value="env"></input>ENV<br></br>
                        <input type="radio" name="vca" value="gate" checked></input>GATE<br></br>
                    </td>
                    <td>
                        <input type="range" min="0" max="10" step="0.5" defaultValue="5"></input>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Vca;