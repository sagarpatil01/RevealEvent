import { useState } from "react";

export default function RegForm(){
     const[type,setType]=useState("");
    return (
        <div className="App">
            <form  className="form-group">
            
            <label for="username" className="form-label">UserName:</label>
            <input type="text" className="form-control" id="username" placeholder="Enter username" name="username"/>
            <label for="pass" className="form-label">Password:</label>
            <input type="password" className="form-control" id="pass" placeholder="Enter password" name="password"/>
            <label for="type" className="form-label">Select user type</label>
            <select className="form-select" id="type" onChange={(e)=>{setType(e.target.value)}}>
            <option selected>Select Any One</option>
            <option value="1">Customer</option>
            <option value="2">Organiser</option>
            <option value="3">Artist</option>
            </select>

            <div className="App" style={{display:type=="2"?'block':'none'}}>
            <label for="cname" className="form-label">Company Name:</label>
            <input type="text" className="form-control" id="cname" placeholder="Enter Company Name" name="companyname"/>
            <label for="licence" className="form-label">Licence Number:</label>
            <input type="text" className="form-control" id="licence" placeholder="Enter Licence" name="licence"/>
            <label for="email" className="form-label">Email:</label>
            <input type="email" className="form-control md-3" id="email" placeholder="Enter email" name="email"/>
            <label for="contact" className="form-label">Phone:</label>
            <input type="text" className="form-control" id="contact" placeholder="Enter mobile" name="contact"/>
        </div>

        <div className="App" style={{display:type=="3"?'block':'none'}} >
        <label for="fname" className="form-label">First_Name:</label>
            <input type="text" className="form-control" id="fname" placeholder="Enter first name" name="firstname"/>
            <label for="lname" className="form-label">Last_Name:</label>
            <input type="text" className="form-control" id="lname" placeholder="Enter last name" name="lastname"/>
            <label for="contact" className="form-label">Phone:</label>
            <label for="genereid" className="form-label">genere ID:</label>
            <input type="text" className="form-control" id="genereid" placeholder="Enter genere ID" name="genereid"/>
            <label for="social1" className="form-label">Social Media 1:</label>
            <input type="text" className="form-control" id="social1" placeholder="social media 1" name="socialmedia1"/>
            <label for="social2" className="form-label">Social Media 2:</label>
            <input type="text" className="form-control" id="social2" placeholder="social media 2" name="socialmedia2"/>
            <label for="social3" className="form-label">Social Media 3:</label>
            <input type="text" className="form-control" id="social3" placeholder="social media 3" name="socialmedia3"/>
            <label for="contact" className="form-label">Phone:</label>
            <input type="text" className="form-control" id="contact" placeholder="Enter mobile" name="contact"/>
            <label for="info" className="form-label">description:</label>
            <textarea className="form-control" id="info" rows="3" name="description"></textarea>
        </div>

        <div className="App" style={{display:type=="1"?'block':'none'}}>
        <label for="fname" className="form-label">First_Name:</label>
            <input type="text" className="form-control" id="fname" placeholder="Enter first name" name="firstname"/>
            <label for="lname" className="form-label">Last_Name:</label>
            <input type="text" className="form-control" id="lname" placeholder="Enter last name" name="lastname"/>
            <label for="contact" className="form-label">Phone:</label>
            <input type="text" className="form-control" id="contact" placeholder="Enter mobile" name="contact"/>
                    <label for="bdate" className="form-label">Birthdate:</label>
                    <input type="date" className="form-control" id="bdate" placeholder="Enter Birthdate ID" name="birthdate"/>
                    <label className="form-check-label" for="gender">Gender: </label>
                 Male<input className="form-check-input" type="radio" name="gender" value="Male" id="gender"></input>
                 Female<input className="form-check-input" type="radio" name="gender" value="Female" id="gender"></input><br/>
                    <select className="form-select" aria-label="Default select example">
                    <option selected>Select Married Status</option>
                    <option value="1">Married</option>
                    <option value="2">Single</option>
                    </select>
                    <label for="address" className="form-label">Adress:</label>
                    <textarea className="form-control" id="address" rows="3" name="adress"></textarea>
                </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    )
}

