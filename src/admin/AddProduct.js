import React ,{ useState,useEffect } from 'react'
import Base from '../core/Base'
import { Link } from 'react-router-dom'
import { getAllCategories } from './helper/adminapicall'
import { isAuthenticated } from '../auth/helper'




 const  AddProduct = () =>  {

  const { user, token } = isAuthenticated()

    const [values, setValues] = useState({
       name:"",
       description:"",
       price:"",
       stock:"",
       photo:"",
       categories:[],
       category:"",
       loading:false,
       error:"",
       createProduct:"",
       getaRedirect:false,
       formData:""
    });

    const { name, description, price, stock, categories, category, loading, error, createProduct, getaRedirect, formData} = values;

    const preload = () =>{
        getAllCategories().then( data =>{
          console.log("data in app product page",data);
            if(data.error) {
                setValues({ ...values,error:data.error})
            }else{
                setValues( {...values, categories:data, formData: new FormData() })
                console.log(categories);
            }
        })           
    }

    
    useEffect(() => {
        preload()       
    }, [])

    const onSubmit = () =>{

    }
    const handleChange = name => event =>{
        //
    }
    const createProductForm = () => (
        <form >
          <span class="text-danger">Post photo</span>
          <div className="form-group">
            <label className="btn btn-block btn-success">
              <input
                onChange={handleChange("photo")}
                type="file"
                name="photo"
                accept="image"
                placeholder="choose a file"
              />
            </label>
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("name")}
              name="photo"
              className="form-control"
              placeholder="Name"
              value={name}
            />
          </div>
          <div className="form-group">
            <textarea
              onChange={handleChange("description")}
              name="photo"
              className="form-control"
              placeholder="Description"
              value={description}
            />
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("price")}
              type="number"
              className="form-control"
              placeholder="Price"
              value={price}
            />
          </div>
          <div className="form-group">
            <select
              onChange={handleChange("category")}
              className="form-control"
              placeholder="Category"
            >
              <option>Select</option>
              { categories && categories.map( (category,index) =>{
                return(
                  <option key = {index} value={category._id}> { category.name }  </option>
                )
              })}
            </select>
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("quantity")}
              type="number"
              className="form-control"
              placeholder="Quantity"
              value={stock}
            />
          </div>
          
          <button type="submit" onClick={onSubmit} className="btn btn-outline-success bottom mb-3">
            Create Product
          </button>
        </form>
      );

    return (
        <Base title="Add a product" description =" welcome to product creation section" className="container bg-info p-4 rounded">
            <Link to="/admin/dashboard" className=" align-baseline btn btn-md btn-dark mb-3 rounded">Admin Home</Link>
            <div className="row bg-dark text-white rounded" >
                <div className="col-md-8 offset-md-2">
                    { createProductForm() }
                </div>
            </div>
           
        </Base>
    )
}

export default AddProduct