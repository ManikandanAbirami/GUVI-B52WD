import React from 'react'

function Users() {
    return (
        <div className='container mt-4'>
            <h2>Users</h2>
            <table className='table table-hover'>
                <thead className='table-dark'>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
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
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Users