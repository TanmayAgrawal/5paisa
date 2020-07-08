import React, { Component } from 'react'
import ProfileTable from './TableGenerator/ProfileTable'

class Profile extends Component {
    render() {
        return (
            <div>
                <h1>Profile</h1>
                <ProfileTable/>
            </div>
        )
    }
}

export default Profile
