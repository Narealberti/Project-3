import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class Navigator extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
                    <div className="container">
                        <Link className="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" to="#"></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item px-lg-4">
                                    <Link className="nav-link text-uppercase text-expanded" to='/'>HOME</Link>
                                    <span className="sr-only">(current)</span>

                                </li>
                                <li className="nav-item active px-lg-4">
                                    <Link className="nav-link text-uppercase text-expanded" to="/menu">HOOKAH MENU</Link>

                                </li>
                                <li className="nav-item px-lg-4">

                                    <Link className="nav-link text-uppercase text-expanded" to="/reservation">MAKE A RESERVATION</Link>
                                </li>
                                <li className="nav-item px-lg-4">
                                    <Link className="nav-link text-uppercase text-expanded" to="/hours">HOURS</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
