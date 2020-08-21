import React,{useState} from 'react'
import Base from '../core/Base'
import {Link} from "react-router-dom"
import { signup } from "../auth/helper"


const Signup = () => {
    // TODO: build this using context API
    const [values,setValues ]=useState({
        name:"",
        email:"",
        password:"",
        error:"",
        success:false
    });

    const { name,email,password,error,success } = values
    // FIXME: just check can we pass two parameters

    const handleChange = name => event =>{
        console.log(event);        
        setValues({...values,error:false,[name]: event.target.value })
    };
    
    const onSubmit = event =>{
        event.preventDefault();
        setValues({...values,error:false})
        signup( { name,email,password, })
        .then(data =>{
            if(data.error){
                setValues({...values , error:data.error,success:false})
            }else{
                setValues({
                    ...values,
                    name:"",
                    email:"",
                    password:"",
                    error:"",
                    success:true
                })
            }
        })
        .catch( console.log("Error in signup !!"))
        
    }


    const signUpForm = () =>{
        return(
            <div className = "row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form  >
                        <div className="form-group">
                            <label className= "text-light">Name</label>
                            <input onChange={handleChange("name")} className="form-control" type="text" value= {name} />
                        </div>
                        <div className="form-group">
                            <label className= "text-light">email</label>
                            <input onChange={handleChange("email")}  className="form-control" type="text" value= {email} />
                        </div>
                        <div className="form-group">
                            <label className= "text-light">password</label>
                            <input onChange={handleChange("password")}  className="form-control" type="password" value={password} />
                        </div>
                        <button onClick={onSubmit} className="btn btn-success btn-block">
                            Submit
                        </button>
                    </form>
                </div>

            </div>
        )
    }
// TODO: use react toastify!
    const successMessage = () =>{
        return(
            <div className = "row">
            <div className="col-md-6 offset-sm-3 text-left">
            <div className="alert alert-success" style = {{display:success ? "":"none"}}>
                New Account was created successfully .Please <Link to="/signin">Login Here!</Link>
            </div>
            </div>
            </div>
        ) 
    }
    const errorMessage = () =>{
        return(
            <div className = "row">
            <div className="col-md-6 offset-sm-3 text-left">
            <div className="alert alert-danger" style = {{display:error ? "":"none"}}>
                {error}
            </div>
            </div>
            </div>
        ) 
    }


    return (
        <div>
            <Base title = "signup page"description = "A page for user to signup">                
                {successMessage()}
                {errorMessage()}
                {signUpForm()}
                < p className="text-white text-center"> {JSON.stringify(values)} </p>
            </Base>
            
        </div>
    )
}

export default Signup
