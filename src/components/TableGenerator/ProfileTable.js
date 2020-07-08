import React from 'react';

const ProfileTable = () => {
    const name = localStorage.getItem('name')
    const clientID = localStorage.getItem('clientID')
    const email = localStorage.getItem('email')

    return(
        <table>
            <tr>
                <td>Name</td>
                <td>{name}</td>
            </tr>
            <tr>
                <td>Client Code</td>
                <td>{clientID}</td>
            </tr>
            <tr>
                <td>Email</td>
                <td>{email}</td>
            </tr>
        </table>
    )
}

export default ProfileTable