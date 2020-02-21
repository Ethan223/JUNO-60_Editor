import React from 'react';

const Chorus: React.FC = () => {
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
                        <input type="checkbox" checked></input>
                    </td>
                    <td>
                        <input type="checkbox"></input>
                    </td>
                    <td>
                        <input type="checkbox"></input>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Chorus;