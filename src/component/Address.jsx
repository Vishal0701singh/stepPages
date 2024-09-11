import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Address(props) {
   
  return (
    <>
    <div className="main">
     <div className="formclass">
     <form>
         <div className="mb-3">
             <label htmlFor="house" className="form-label">House Number</label>
             <div className="mb-3a">
             <input type="text" className="form-control"  id="house" name='house' required />
             </div>

         </div>
         <div className="mb-3">
             <label htmlFor="street" className="form-label">Street Address</label>
             <input type="text" className="form-control" id="street" name='street'  required />
         </div>
         <div className="mb-3">
             <label htmlFor="code" className="form-label">ZIP or Postal code</label>
             <input type="text" className="form-control" id="code" name='code' pattern='[0-9]{6}' required />
         </div>
         <div className="mb-3">
             <label htmlFor="City" className="form-label">City</label>
             <input type="text" className="form-control" name='City' id="City" />
         </div>
         <div className="mb-3">
         <label className="form-check-label" htmlFor="State">State</label>
             <input className="form-control" type="text" name="State" id="State" />
          
         </div>
         <div className="mb-3">
             <label htmlFor="Country" className="form-label">Country</label>
             <input type="text" className="form-control" id="Country" aria-describedby="emailHelp" />
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
         <NavLink className="nav-link btn btn-success" aria-current="page" to="/payment">Save & Next</NavLink>
     </form>
    
     </div>
    </div>
 </>
  );
}
