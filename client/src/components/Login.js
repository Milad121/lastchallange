import React from 'react';
import ReactDOM from 'react-dom/client';
import Register from './Register';
import Home from './Home';
import { useState } from 'react';
import axios from "axios";
//sessionStorage.getItem("name");

 function Login() {
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const handleSubmit = event => {
        event.preventDefault();
        document.getElementById("errorelog").innerText = '';


       
      

        try {
            const getAnswer = async () => {
                await axios.post('http://127.0.0.1:5000/auth', {
                    email: email,
                    password: password
                }).then(function (response) {
                    console.log(response)
                    if (response.data.errors) {

                        document.getElementById("errorelog").innerText = response.data.errors.all;
                    } else {
                        if (response.data.user.email) {
                            
                            sessionStorage.setItem("token", response.data.token);

                            setIsSaved(true);
                            const root1 = ReactDOM.createRoot(document.getElementById('root1'));

                            root1.render(<Home />);
                        }
                    }
                });
                
            };
            getAnswer();
          //const aa=  await axios.post(('http://127.0.0.1:5000/auth', {
          //      email: email,
          //      password: password
          //  })
                
          //      .catch(function (error) {
          //          console.log(error);
          //      }))
      
           

        }
        catch (err) {
            console.log(err);
        }
    };
   function handelclick() {
        const root1 = ReactDOM.createRoot(document.getElementById('root1'));

        root1.render(<Register />);
    }
    return (
        <div className="login">
            <h1>Login</h1>
            <div id="errorelog" className=" alert alert-danger"></div>
            <form className="form" onSubmit={handleSubmit } method="post">
                <label for="username">
                    <i className="fa fa-user"></i>
                </label>
                <input type="text" name="email" placeholder="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                    <label for="password">
                        <i className="fa fa-lock"></i>
                    </label>
                <input type="password" name="password" placeholder="Password" id="password" onChange={(e) => setpassword(e.target.value)} />
                        <button type="submit" value="Login">submit</button>
            </form>
            <div>
                if you dont have account please <button onClick={handelclick}>register</button>
            </div>
        </div>
             
    );
}

 export default Login;