import React, { Component } from "react";
import "./Dashboard.css";
import Form from "../cards/Form";
import "typeface-roboto";
import Quiz from "../views/Quiz";

import { NavLink } from "react-router-dom";
export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedin: true
        };
        this.onLoginChange = this.onLoginChange.bind(this);
    }
    onLoginChange(event) {
        this.setState(state => ({
            isLoggedin: event
        }));
    }
    render() {
        return (
            <div className="outline">
                <div className="row">
                    <div className="col-3">
                        <Form
                            isLoggedin={this.state.isLoggedin}
                            onLoginChange={this.onLoginChange}
                        />
                    </div>
                    <div className="col-9">
                        <header id="home-section">
                            <div className="dark-overlay">
                                {this.state.isLoggedin ? (
                                    <Quiz />
                                ) : (
                                    <NavLink
                                        to="/user/quiz"
                                        className="nav-link px-3"
                                    >
                                        <h4 className="text-dark text-center mt-5 mx-auto py-5">
                                            Please Login to Start the quiz
                                        </h4>
                                    </NavLink>
                                )}
                            </div>
                        </header>
                    </div>
                </div>
            </div>
        );
    }
}
