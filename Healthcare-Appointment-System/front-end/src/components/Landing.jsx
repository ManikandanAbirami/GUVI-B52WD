import React from 'react'
import { useUserContext } from './UserContext'
import PatientLanding from './PatientLanding';
import DoctorLanding from './DoctorLanding';

function Landing() {
    const { user } = useUserContext();
    console.log("User", user);
    console.log("User Role", user.role);
    return (
        <div>
            {user && user.role === 'patient' ? <PatientLanding></PatientLanding> : <DoctorLanding></DoctorLanding>}
        </div>
    )
}

export default Landing