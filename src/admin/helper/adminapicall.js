const { API } = require("../../backend");

//category calls
export const CreateCategory = (userId, token, category) =>{    
    return fetch(`${API}/category/create/${userId}`,{
        method: "POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
            Authorization : `Bearer ${token}`
        },
        body: JSON.stringify(category)       
    })
    .then(response =>{
        return response.json()
    })
    .catch(
        err => console.log(err)
    )
}
// get all categories /category/allcategories
// export const getAllCategories = () =>{
//     return fetch(`{API}/allcategories`,{
//         method:"GET"
//     })
//     .then(response =>{
//         console.log("coming in the admin api call page");
//         console.log(response);
//         return response.json()
//     })
//     .catch(err => console.log("error here coming",err))
// }

//get all categories
export const getAllCategories = () => {
    return fetch(`{API}/allcategories`, {
      method: "GET"
    })
      .then(response => {
          const a = response
          const b  = a.json()
          console.log("achyuth",a);
          return b
      })
      .catch(err => console.log(err));
  };


// product calls

export const createProduct = (userId, token, product) =>{
    return fetch(`${API}/product/create/${userId}`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            Authorization : `Bearer ${token}`
        },
        body:product
    })
    .then( response =>{
        return response.json()
    })
    .catch( err => console.log(err))

}
// 
export const getAllProducts = () =>{
    return fetch(`{API}/products`,{
        method:"GET"
    })
    .then(response =>{
        return response.json()
    })
    .catch(err => console.log(err))
}
// get a product
export const getOneProduct =(productId) =>{
    return fetch(`{API}/product/:productId` ,{
        method:"GET"
    })
    .then(response =>{
        return response.json()
    })
    .catch(err => console.log(err))
}

export const deleteProduct = (userId, token, product,productId) =>{
    return fetch(`${API}/product/create/${productId}/${userId}`,{
        method:"DELETE",
        headers:{
            Accept:"application/json",
            Authorization : `Bearer ${token}`
        },
        body:product
    })
    .then( response =>{
        return response.json()
    })
    .catch( err => console.log(err))
}

export const updateProduct = (userId, productId, token, product) =>{
    return fetch(`${API}/product/create/${productId}/${userId}`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            Authorization : `Bearer ${token}`
        },
        body:product
    })
    .then( response =>{
        return response.json()
    })
    .catch( err => console.log(err))
}