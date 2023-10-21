import React, { useState } from 'react'
import Joi from 'joi'
import { Link } from 'react-router-dom';

export default function Signup() {
  let [user,setUser] =useState({
    name:'',
    email:'',
    password:'',
  })
  let[errorlist,seterrorlist]=useState([]);
  function submitformData(e){
     e.preventDefault();
     let valideResult = validateForm();
     if(valideResult.error){
      seterrorlist(valideResult.error.details);
     }
  }
  function getFormVlue(e){
       let myUser={...user};
       myUser[e.target.name]=e.target.value;
       setUser(myUser);
  }
  function validateForm(){
    const schema = Joi.object({
      name:Joi.string().required().min(3).max(10),
      email: Joi.string().required().email({ minDomainSegments: 2, tlds:{ allow: ['com', 'net'] } }),
      password: Joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    })
       return schema.validate(user,{abortEarly:false});
  }

  return (
    <>
<section className="vh-100 bg-image" >
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{borderRadius: 15}}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Create an account</h2>
              {errorlist.map( (error,index)=> 
              <div key={index} className="alert alert-danger">
                {error.message}
              </div>
                  )}
              <form onSubmit={submitformData}>
                <div className="form-outline mb-3">
                  <input onChange={getFormVlue} type="text" name='name' id="name" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="name">Your Name</label>
                </div>
                <div className="form-outline mb-3">
                  <input onChange={getFormVlue} type="email" name='email' id="email" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="email">Your Email</label>
                </div>
                <div className="form-outline mb-3">
                  <input onChange={getFormVlue} type="password" name='password'id="password" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="password">Password</label>
                </div>
                <div className="form-check d-flex justify-content-center mb-3">
                  <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3cg" />
                  <label className="form-check-label" htmlFor="form2Example3g">
                    I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                  </label>
                </div>
                <div className="d-flex justify-content-center">
                  <button className="btn btn-success btn-block btn-lg  text-body">Register</button>
                </div>
                <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link to="Login" className="fw-bold text-body"><u>Login here</u></Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </>
  )
}
