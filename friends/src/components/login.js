import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialFormValues = {
    credentials: {
        username: "",
        password: "",
    }
}

 const Login = (props) => {
    const [formValues, setFormValues] = useState(initialFormValues);

    const handleChange = (e) => {
        setFormValues({
            credentials: {
                ...formValues, 
                [e.target.name]: e.target.value
            }
        })
    };

    const handleLogin = (e) => {
        e.preventDefault();

    const userLogin = {
        username: 'Lambda School',
        password: 'i<3Lambd4',
    };

    axiosWithAuth()
        .post('/login', userLogin)
        .then((res) => {
            localStorage.setItem('token', JSON.stringify(res.data.payload));
            console.log(res);
            props.history.push('./friendsProtected');
        })
        .catch((err) => {
        console.log(err);
        })
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <label>
                    UserName:
                    <input
                        type="text"
                        name="username"
                        value={formValues.credentials.username}
                        onChange={handleChange}
                        />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={formValues.credentials.password}
                        onChange={handleChange}
                        />
                </label>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;
