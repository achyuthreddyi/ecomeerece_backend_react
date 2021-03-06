import React ,{ useState } from 'react'
import Base from '../core/Base'
import { isAuthenticated } from '../auth/helper'
import { Link } from 'react-router-dom'
import { CreateCategory } from './helper/adminapicall'




const AddCategory = () => {

    const [name, setName] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const {user,token } = isAuthenticated();

    const goback = () =>{
        return (
        <div className="mt-5 ">
            <Link className= "btn btn-sm btn-info mb-3" to="/admin/dashboard">
                Admin Home
            </Link>
        </div>
        )
    }
    const handleChange = (event) =>{
        setError("");
        setName(event.target.value)
    }
    
    const onSubmit = (event) =>{
        event.preventDefault();
        setError("");
        setSuccess(false)

        // backend request to the serverTODO: just comeback and just check
        CreateCategory(user._id,token,{name})
            .then( data =>{
                if(data.error){
                    setError(data.error)
                }else{
                    setError("")
                    setSuccess(true)
                    setName("")
                }
            })
            .catch()

    }

    const successMessage = () =>{
        if(success){
            return <h4 className="text-success">Category created successfully </h4>
        }

    }
    const warningMessage = () =>{
        if(error){
            return <h4 className="text-danger">Category creation failed </h4>
        }

    }


    const myCategoryForm = () =>{
        return(
            <form> 
                <div  className="form-group ">
                    <p className="lead"> Enter the Category</p>
                    <input type="text" 
                    className="form-control my-3" 
                    onChange ={handleChange}
                    value = {name}
                    autoFocus
                    required
                    placeholder="For Eg Summer"                    
                    />
                    <button onClick = {onSubmit} className="btn btn-outline-info">Create Category</button>
                </div>

            </form>

        )}

    return (
        <Base title="Create a category here" description="Add a new Category for new T shirts" className="container bg-secondary p-4">
            <div className="row bg-white rounded">
                <div className="col-md-8 offset-md-2">
                   
                    { myCategoryForm() }
                    { successMessage() }
                    { warningMessage() }
                    { goback() }
                </div>
            </div>                       
        </Base>
    )
}

export default AddCategory
