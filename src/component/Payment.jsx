import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Payment(props) {
  return (
    <>
    <div className="main">
     <div className="formclass">
     <form>
         <div className="mb-3">
             <label htmlFor="bname" className="form-label">Bank Name</label>
             <div className="mb-3a">
             <input type="text" className="form-control"  id="bname" name='bname' required />
             </div>

         </div>
         <div className="mb-3">
             <label htmlFor="ifsccode" className="form-label">IFSC code</label>
             <input type="text" className="form-control" id="ifsccode" name='ifsccode' required />
         </div>
         <div className="mb-3">
             <label htmlFor="branch" className="form-label">Branch Name</label>
             <input type="text" className="form-control" id="branch" name='branch' required />
         </div>
         <div className="mb-3">
             <label htmlFor="accountNumber" className="form-label">Account Number</label>
             <input type="number" className="form-control" name='accountNumber' id="accountNumber" />
         </div>
         <div className="mb-3">
             <div>Payment Mode</div>
             <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
             <label className="form-check-label" htmlFor="flexRadioDefault1">Online</label>
             <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
             <label className="form-check-label" htmlFor="flexRadioDefault1">Cash</label>
         </div>
         <div className="mb-3">
             <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
             <input type="email" className="form-control" id="exampleInputEmail1"  pattern='[a-z0-1][@][a-z][.][a-z]' aria-describedby="emailHelp" />
             <div id="emailHelp" className="form-text red">We'll never share your email with anyone else.</div>
         </div>
         {/* <div className="mb-3">
                     <label for="exampleInputPassword1" className="form-label">Password</label>
                     <input type="password" className="form-control" id="exampleInputPassword1"/>
                 </div> */}
         <div className="mb-3 form-check">
             <input type="checkbox" className="form-check-input" id="exampleCheck1" />
             <label className="form-check-label" htmlFor="exampleCheck1">Is your entries are correct</label>
         </div>
         {/* <button  className="btn btn-success" onClick={handlesaves}>Save & Next</button> */}
         <NavLink className="nav-link btn btn-success" aria-current="page" to="/payment">Subbmit</NavLink>
     </form>
    
     </div>
    </div>
 
    </>
  );
}
