import React from 'react'
import { Route, Redirect } from 'react-router-dom';


const checkAuth = () => {

    const token = localStorage.getItem('jwt')
    if (!token) {
        return false
    }


    return true
}


const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            checkAuth() ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{
                        pathname: '/cloudvibes/admin',

                    }} />
                )
        }


    />
)

export default ProtectedRoute;