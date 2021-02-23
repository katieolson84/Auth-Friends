import React, { useState } from 'react';
// import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';

const initialFormValues = {
    username: "",
    password: "",
}

 const Login = () => {
    const [formValues, setFormValues] = useState(initialFormValues);

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value});
    };

    const handleLogin = (e) => {
        e.preventDefault();

    const userLogin = {
        username: 'Lambda School',
        password: 'i<3Lambd4',
    };

    axios
        .post('http://localhost:5000', userLogin)
        .then((res) => {
            localStorage.setItem('token', JSON.stringify(res.data.payload))
        })

    };




    return (
        <div>
            <form onSumbit={handleLogin}>
                <label>
                    UserName:
                    <input
                        type="text"
                        name="username"
                        value={formValues.username}
                        onchange={handleChange}
                        />
                </label>
                <label>
                    Password:
                    <input
                        type="text"
                        name="password"
                        value={formValues.password}
                        onchange={handleChange}
                        />
                </label>
            </form>
        </div>
    )
}

export default Login;
