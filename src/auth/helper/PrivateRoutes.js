import React from "react"
import {Route,Redirect} from "react-router-dom"
import { isAuthenticated } from "./index"

// FIXME: only one component can be mounted if children is given we can mount many components
const  PrivateRoute = ({ component:Component , ...rest }) => {
    return (
      <Route
        {...rest}
        render={ props  =>
          isAuthenticated() ? (
            <Component {...props} /> 
          ) : (
            <Redirect
              to={{
                pathname: "/signin",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }

  export default PrivateRoute;