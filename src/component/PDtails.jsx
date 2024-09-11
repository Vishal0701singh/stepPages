import React from 'react';
import './PDtails.css';
import { NavLink } from 'react-router-dom';

export default function PDtails({data}) {
const handlesubmit=()=>{
    data.onsubmit();
}

  
    return (
        <>
           <div className="main">
            <div className="formclass">
            <form onSubmit={handlesubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <div className="mb-3a">
                    <input type="text" className="form-control" placeholder='FirstName' id="name" name='name' required />
                    <input type="text" className="form-control" placeholder='LastName'  id="name" name='name' />
                    </div>

                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="phone" name='phone' pattern="[0-9]{10}" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="dob" className="form-label">DOB</label>
                    <input type="date" className="form-control" id="dob" name='dob' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input type="number" className="form-control" id="age" />
                </div>
                <div className="mb-3">
                    <div>Gender</div>
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label" htmlFor="flexRadioDefault1">Male</label>
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label" htmlFor="flexRadioDefault1">Female</label>
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label" htmlFor="flexRadioDefault1">Other</label>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" pattern='[a-z0-1][@][a-z][.][a-z]' aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text red">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Is your entries are correct</label>
                </div>
               
                <NavLink className="nav-link btn btn-success" aria-current="page" to="/address">Save & Next</NavLink>
            </form>
           
            </div>
           </div>
        </>
    );
}
