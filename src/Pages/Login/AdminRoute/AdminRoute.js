import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { Redirect, Route } from 'react-router';

const AdminRoute = ({ children, ...rest }) => {
    const {user, admin, isLoading} = useAuth();
    if(isLoading){
        return   <Spinner animation="border" variant="danger" />
    }
    return (
        <Route
        {...rest}
        render={({location}) => user.email && admin ? children : <Redirect
        to={{
            pathname: "/",
            state: { from: location }
        }}
        ></Redirect>
        }
        >
        </Route>
    );
};

export default AdminRoute;