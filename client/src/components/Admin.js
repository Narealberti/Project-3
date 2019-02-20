import React, { Component } from 'react'
import axios from 'axios';
import classnames from 'classnames';



import setAuthToken from '../utils/setAuthToken';

import '../css/admin.css'

export default class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = {

            email: '',
            password: '',
            errors: {}
        }

    }


    onSubmit(e) {
        e.preventDefault()
        const user = {

            email: this.state.email,
            password: this.state.password
        }
        axios.post('/api/users/login', user)
            .then(res => {
                if (localStorage.getItem('jwt')) {
                    this.props.history.push('/dashboard')
                } else {

                    const { token } = res.data;
                    //Set token to ls
                    localStorage.setItem('jwt', token);
                    //set token to Auth header
                    setAuthToken(token);
                    this.props.history.push('/dashboard')
                }

            })
            .catch(err => this.setState({ errors: err.response.data }))
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }




    render() {
        const { errors } = this.state


        return (
            <div>
                <div className="login-form">
                    <form noValidate onSubmit={this.onSubmit.bind(this)}>
                        <h2 className="text-center">Admin</h2>

                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-user"></i></span>
                                <input type="text"
                                    className={classnames("form-control", {
                                        'is-invalid': errors.email
                                    })}
                                    name="email"
                                    placeholder="Email"

                                    value={this.state.email}
                                    onChange={this.onChange.bind(this)} />
                            </div>
                            {errors.email && (
                                <p className='errors-p'>{errors.email}</p>
                            )}
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                <input
                                    autoComplete='off'
                                    type="password"
                                    className={classnames("form-control", {
                                        'is-invalid': errors.password
                                    })}
                                    name="password"
                                    placeholder="Password"

                                    value={this.state.password}
                                    onChange={this.onChange.bind(this)} />
                            </div>
                            {errors.password && (
                                <p className='errors-p'>{errors.password}</p>
                            )}
                        </div>


                        <div className="form-group">
                            <div className="input-group">

                                <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                            </div>
                        </div>

                    </form>

                </div>
            </div>
        )
    }
}
