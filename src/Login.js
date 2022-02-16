import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';



function Login() {
    const navigate = useNavigate();

    const formik=useFormik({
      initialValues:{
        email:"",
        password:""
        },

        validationSchema:Yup.object({
                    email:Yup.string()
                    .email("Please provide the valid email")
                    .required("This is Required"),
                    password:Yup.string()
                    .max(8,"Password must be less then 8 character")
                    .required("This is Required")

        }),

        onSubmit:(values)=>{
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values)
            };
    
            fetch("http://localhost:3003/register", requestOptions)
                .then((result) => {
                    result.json().then((resp) => {
                        console.log("response", resp)
                        navigate("/");
                    })
                    localStorage.setItem('user-info',JSON.stringify(result));

    
                })

        

           
         
    }
})
console.log(formik.values)
  return (
    <>
      <div className='container col-lg-5 card mt-5 p-5 '>
      <h1>Login</h1>
            <form onSubmit={formik.handleSubmit }>
            <input className="form-control mt-5"
                type="text"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder="Enter the Email"
                  
                />
                  {formik.touched.email && formik.errors.email && <p style={{color:"red"}}>{formik.errors.email}</p>}   
           
                <input className="form-control mt-5"
                type="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                placeholder="Enter the Password"
                />
                {formik.touched.password && formik.errors.password && <p style={{color:"red"}}>{formik.errors.password}</p>}

                <button className='btn btn-info col-lg-3 mt-5 ' type="submit">Login</button>


            </form>

            </div>

    </>
  )
}

export default Login