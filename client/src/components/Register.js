import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Login';
import { useState } from 'react';
import axios from "axios";

function Register() {
    const [username, setusername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const [confirmpassword, setconfirmpassword] = useState('')
    const handleSubmit = event => {
        event.preventDefault();
        document.getElementById("errorelog").innerText = '';




        try {
            const getAnswer = async () => {
                await axios.post('http://127.0.0.1:5000/regauth', {
                    email: email,
                    password: password,
                    username: username, confirmpassword: confirmpassword
                }).then(function (response) {
                    console.log(response)
                    if (response.data.errors) {

                        document.getElementById("errorelog").innerText = response.data.errors.all;
                    } else {
                        if (response.data.email) {
                            handelclick();
                        }
                    }
                });

            };
            getAnswer();
        }

        catch (err) {
            console.log(err);
        }
    }
        function handelclick() {
            const root1 = ReactDOM.createRoot(document.getElementById('root1'));

            root1.render(<Login />);
        }
        return (<div className="login">
            <h1>register</h1>


            <div id="errorelog" className="alert alert-danger"></div>
            <form className="form" onSubmit={handleSubmit} method="post">
                <label for="username">

                    <i className="fa fa-user"></i>
                </label>
                <input type="text" name="username" placeholder="username" id="username" onChange={(e) => setusername(e.target.value)} required />
                <label for="email">

                    <i className="fa fa-at"></i>
                </label>
                <input type="text" name="email" placeholder="email" id="email" onChange={(e) => setEmail(e.target.value)} required />
                <label for="password">
                    <i className="fa fa-lock"></i>
                </label>
                <input type="password" name="password" placeholder="Password" id="password" onChange={(e) => setpassword(e.target.value)} required />
                <label for="confirmpassword">
                    <i className="fa fa-lock"></i>
                </label>
                <input type="password" name="confirmpassword" placeholder="confirmpassword" onChange={(e) => setconfirmpassword(e.target.value)} id="confirmpassword" required />
                <input type="submit" value="register" />
            </form>  if you  have account please <button onClick={handelclick}>login</button>
        </div>


        );
    }

export default Register;