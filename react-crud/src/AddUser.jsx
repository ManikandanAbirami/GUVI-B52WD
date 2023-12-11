import React, { useState } from 'react'
import Header from './Header'
import { Link, useNavigate } from 'react-router-dom'

function AddUser(props) {
    const [user, setUser] = useState({
        id: 0,
        name: "",
        email: "",
    });

    const navigate = useNavigate();

    const inputChangeHandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const onFormSubmitted = (e) => {
        e.preventDefault();
        props.addUserHandler(user);
        setUser({ id: 0, name: "", email: "" });
        navigate("/");
    }

    const { name, email } = user;
    return (
        <div>
            <Header heading="Add new user" />
            <div className="container">
                <Link to="/">
                    <button type='button' className='btn btn-primary'>Back</button>
                </Link>

                <form onSubmit={onFormSubmitted} className='mt-3'>
                    <label htmlFor="name" className="form-label">
                        Name:{""}
                    </label>
                    <br />
                    <input type="text" id="name" name="name" className="form-control" onChange={inputChangeHandler} />
                    <br />
                    <br />
                    <label htmlFor="email" className="form-label">
                        Email:{""}
                    </label>
                    <br />
                    <input type="text" id="email" name="email" className="form-control" onChange={inputChangeHandler} />
                    <br />
                    <br />

                    <div className="container">
                        <div className="card-body">
                            <div className="card-header">
                                <h2>User to be added:{" "}</h2>
                            </div>
                            <div className="card-text">
                                <div style={{ color: "red" }}>Name: {name}</div>
                                <div style={{ color: "red" }} className='mt-3 mb-3'>Email: {email}</div>
                            </div>
                        </div>
                    </div>
                    <button className='btn btn-danger' type="submit">
                        Add
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddUser