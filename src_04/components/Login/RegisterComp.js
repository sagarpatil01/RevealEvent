
import { useEffect, useState } from "react";
import { useReducer } from "react";
export default function RegForm(){
    const[type,setType]=useState("");
    const init ={
        username:"",
        password:"",
        company_name:"",
        licence_no:"",
        email:"",
        contact_no:"",
        first_name:"",
        last_name:"",
        genid:"",
        social_media1:"",
        social_media2:"",
        social_media3:"",
        description:"",
        birthdate:"",
        identity:"",
        married:"",
	    address:""
        
   }
    var url="";
    if(type=="1"){
       url="http://localhost:8080/insertcustomer";
    }else if(type=="2")
    {
       url="http://localhost:8080/insertorganizer";
    }else if(type=="3")
    {
       url="http://localhost:8080/insertartist";
    }
    const reducer =(state,action)=>{
        switch(action.type)
        {
            case 'update':
                return {...state ,[action.fld]:action.val}
            case 'reset':
                return init;
        }
    }

    
    const [info,dispatch]= useReducer(reducer,init);
    
    const[gen,setGen]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/getallgenre")
        .then(resp=>resp.json())
        .then(ge=>setGen(ge))
    },[])
    const sendData = (e) => {
        e.preventDefault();
        const reqOptions={
            method:'POST',
            headers:{'content-type':'application/json'},
            
            body:JSON.stringify(info)
        }
        fetch(url,reqOptions)
        .then(resp => {if(resp.ok)
                          return resp.text();
                        else
                          throw new Error("Server error");
                       })
        .then(text => text.length ? JSON.parse(text):{})
        .then(obj=>console.log(obj))
                    }
    
    
    return (
        <div className="App container">
            <form  className="form-group" action={url} method="">
            
            <label htmlFor="username" className="form-label">UserName:</label>
            <input type="text" className="form-control" id="username" placeholder="Enter username" name="username" value={info.username} 
              onChange={(e)=>{dispatch({type:'update',fld:'username',val:e.target.value})}}
            />
            <label htmlFor="pass" className="form-label">Password:</label>
            <input type="password" className="form-control" id="pass" placeholder="Enter password" name="password" value={info.pass}
             onChange={(e)=>{dispatch({type:'update',fld:'password',val:e.target.value})}}
            />
            <label for="type" className="form-label">Select user type</label>
            <select className="form-select" id="type" onChange={(e)=>{setType(e.target.value)}}>
            <option selected>Select Any One</option>
            <option value="1">Customer</option>
            <option value="2">Organiser</option>
            <option value="3">Artist</option>
            </select>

            <div className="App" style={{display:type=="2"?'block':'none'}}>
            <label htmlFor="cname" className="form-label">Company Name:</label>
            <input type="text" className="form-control" id="cname" placeholder="Enter Company Name" name="company_name" value={info.cname}
             onChange={(e)=>{dispatch({type:'update',fld:'company_name',val:e.target.value})}}
            />
            <label htmlFor="licence" className="form-label">Licence Number:</label>
            <input type="text" className="form-control" id="licence" placeholder="Enter Licence" name="licence_no" value={info.licence}
            onChange={(e)=>{dispatch({type:'update',fld:'licence_no',val:e.target.value})}}
            />
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" className="form-control md-3" id="email" placeholder="Enter email" name="email" value={info.email}
            onChange={(e)=>{dispatch({type:'update',fld:'email',val:e.target.value})}}/>
            <label htmlFor="contact" className="form-label">Phone:</label>
            <input type="text" className="form-control" id="contact" placeholder="Enter mobile" name="contact_no" value={info.contact}
            onChange={(e)=>{dispatch({type:'update',fld:'contact_no',val:e.target.value})}}/>
        </div>

        <div className="App" style={{display:type=="3"?'block':'none'}} >
        <label htmlFor="fname" className="form-label">First_Name:</label>
            <input type="text" className="form-control" id="fname" placeholder="Enter first name" name="first_name"
            onChange={(e)=>{dispatch({type:'update',fld:'first_name',val:e.target.value})}}/>
            <label htmlFor="lname" className="form-label">Last_Name:</label>
            <input type="text" className="form-control" id="lname" placeholder="Enter last name" name="last_name"
            onChange={(e)=>{dispatch({type:'update',fld:'last_name',val:e.target.value})}}/>
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" className="form-control md-3" id="email" placeholder="Enter email" name="email" value={info.email}
            onChange={(e)=>{dispatch({type:'update',fld:'email',val:e.target.value})}}/>
            <label htmlFor="geneid" className="form-label">genere ID:</label>
            <select type="text" className="form-select" name="genid" value={info.genid}
            onChange={(e)=>{dispatch({type:'update',fld:'genid',val:e.target.value})}}>
                {gen.map(g=>{
                    return <option value={g.id}>{g.category_name}</option>
                    
                })}
            </select>
            <label htmlFor="social1" className="form-label">Social Media 1:</label>
            <input type="text" className="form-control" id="social1" placeholder="social media 1" name="social_media1"
            onChange={(e)=>{dispatch({type:'update',fld:'social_media1',val:e.target.value})}}/>
            <label htmlFor="social2" className="form-label">Social Media 2:</label>
            <input type="text" className="form-control" id="social2" placeholder="social media 2" name="social_media2"
            onChange={(e)=>{dispatch({type:'update',fld:'social_media2',val:e.target.value})}}/>
            <label htmlFor="social3" className="form-label">Social Media 3:</label>
            <input type="text" className="form-control" id="social3" placeholder="social media 3" name="social_media3"
            onChange={(e)=>{dispatch({type:'update',fld:'social_media3',val:e.target.value})}}/>
            <label htmlFor="contact" className="form-label">Phone:</label>
            <input type="text" className="form-control" id="contact" placeholder="Enter mobile" name="contact_no"
            onChange={(e)=>{dispatch({type:'update',fld:'contact_no',val:e.target.value})}}/>
            <label htmlFor="info" className="form-label">description:</label>
            <textarea className="form-control" id="info" rows="3" name="description"
            onChange={(e)=>{dispatch({type:'update',fld:'description',val:e.target.value})}}></textarea>
        </div>

        <div className="App" style={{display:type=="1"?'block':'none'}}>
        <label htmlFor="fname" className="form-label">First_Name:</label>
            <input type="text" className="form-control" id="fname" placeholder="Enter first name" name="first_name" value={info.fname}
            onChange={(e)=>{dispatch({type:'update',fld:'first_name',val:e.target.value})}}></input>
            <label htmlFor="lname" className="form-label">Last_Name:</label>
            <input type="text" className="form-control" id="lname" placeholder="Enter last name" name="last_name" value={info.lname}
            onChange={(e)=>{dispatch({type:'update',fld:'last_name',val:e.target.value})}}/>
              <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" className="form-control md-3" id="email" placeholder="Enter email" name="email" value={info.email}
            onChange={(e)=>{dispatch({type:'update',fld:'email',val:e.target.value})}}/>
            <label htmlFor="contact" className="form-label">Phone:</label>
            <input type="text" className="form-control" id="contact" placeholder="Enter mobile" name="contact_no" value={info.contact}
            onChange={(e)=>{dispatch({type:'update',fld:'contact_no',val:e.target.value})}}/>
                    <label htmlFor="bdate" className="form-label">Birthdate:</label>
                    <input type="date" className="form-control" id="bdate" placeholder="Enter Birthdate ID" name="birthdate" value={info.bdate}
                    onChange={(e)=>{dispatch({type:'update',fld:'birthdate',val:e.target.value})}}/>
                    <label className="form-check-label" htmlFor="gender">Gender: </label>
                 Male<input className="form-check-input" type="radio" name="identity" id="gender" value={info.gender="m"}
                 onChange={(e)=>{dispatch({type:'update',fld:'identity',val:e.target.value})}}></input>
                 Female<input className="form-check-input" type="radio" name="identity" id="gender" value={info.gender="f"} 
                 onChange={(e)=>{dispatch({type:'update',fld:'identity',val:e.target.value})}}></input><br/>
                 <label htmlFor="status" className="form-label">Select Married Status:</label>
                    <select className="form-select" aria-label="Default select example" name="married" id="status" value={info.status}
                    onChange={(e)=>{dispatch({type:'update',fld:'married',val:e.target.value})}}>
                    <option selected>Select Married Status</option>
                    <option value="married">Married</option>
                    <option value="single">Single</option>
                    </select>
                    <label htmlFor="address" className="form-label">Adress:</label>
                    <textarea className="form-control" id="address" rows="3" name="address" value={info.address}
                    onChange={(e)=>{dispatch({type:'update',fld:'address',val:e.target.value})}}></textarea>
                </div>
            <button type="submit" className="btn btn-primary" onClick={(e)=>{sendData(e)}}>Submit</button>
           {<p>{JSON.stringify(info)}</p>}
        </form>
        
        </div>
    )
}

