import React from "react";
import { Link } from "react-router-dom";
import Allinone from "../imagenes/Allinone.png";

function Init() {
  return(
    <div className='container'>
       
      <div className="row">
        <img src={Allinone} alt="portada" className="mx-auto" style= {{maxWidth:"300px"}}/>
        </div>
       <div className="container">
          <div className="mx-auto">
            <div className="card">
              <div className="card-header" style={{backgroundColor:'#E54740'}}>
                Featured 
                <button type="button" className="btn-close" aria-label="Close" style={{width: '25px', height: '15px',position:'absolute',right: '30px'}}></button>
              </div>
                <div className="container">
                  
                </div>
              <div className="card-body">
                <form action="/HomeL" method="get">
                <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
              </div>
            </div>
         </div>
        </div>
    );
  
}
export default Init;