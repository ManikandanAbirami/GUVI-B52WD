import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Users() {
    const [user, setUser] = useState([]);
    //Mount, UnMount, Update
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                // Extract only the common names of the countries
                setUser(res.data);
                console.log("Use data:", res.data);
            })
    }, []);
    //https://jsonplaceholder.typicode.com/users
    return (
        <div className='container mt-4'>
            <h2>Users</h2>
            <table className='table table-hover'>
                <thead className='table-dark'>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>WebSite</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((item, index) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{`${item.address.suite} ${item.address.street} ${item.address.city}`}</td>
                        </tr>
                    ))}
                    {/* <tr>
                        <td>1</td>
                        <td>Manikandan A</td>
                        <td>mani@gmail.com</td>
                        <td>Employee</td>
                    </tr>
                    <tr className='table-primary'>
                        <td>2</td>
                        <td>Jack</td>
                        <td>jack@gmail.com</td>
                        <td>Employee</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}

export default Users