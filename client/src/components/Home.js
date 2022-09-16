import axios from "axios";
import React, { Component } from "react";
import Result from "./result";
import Login from "./Login";

import ReactDOM from 'react-dom/client';
import Register from './Register';

class Home extends Component {
    
 
    constructor() {
      

        super();
        this.state = {
            questionData: [],
            req: [],
            errors: [],


        };
    }
    handelclick() {
        const root1 = ReactDOM.createRoot(document.getElementById('root1'));

        root1.render(<Login />); 
    }
    componentDidMount = () => {
        axios.get("http://localhost:5000/")
            .then((response) => {
                this.setState({
                    questionData: response.questionData,
                    req: response.req,
                    errors: response.errors,
            });
               
               
        });
    };
    



    render() {

        if (this.state.errors == null) {
            if (this.state.req != null && this.state.req.session.loggedin) {
                if (this.state.questionData && this.state.questionData.length > 0) {
                    return (
                        <div>
                            <hr></hr>
                            <h1>post</h1>
                            <ul class="xsearch-items">
                                {
                                    <ol>
                                        {this.state.questionData.map((repos, index) => {
                                            return (
                                                <Result qoute={repos} index={index} />

                                            );
                                        })}
                                    </ol>
                                }
                            </ul>
                        </div>
                    );
                }
                else {
                    return (
                        <div>
                            <h1>noting post in database</h1>
                        </div>

                    );
                }

            } else {
                return (
                    <div>
                        <h1>you dont have access please <button onClick={this.handelclick}>login</button></h1>
                    </div>

                );
            }
        } else {
            return (
                <div>
                    <h1>you dont have access please <button onClick={this.handelclick}>login</button></h1>
                </div>

            );
        }

       
       
    }
}

export default Home;
