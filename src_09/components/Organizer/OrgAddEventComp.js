import { useEffect,useReducer } from "react";
import { useState } from "react"
import OrgNavComp from "./OrgNavComp";
import { useNavigate } from "react-router-dom";

export default function EventForm(){

    let navigate=useNavigate();

    const[ar,setAr]=useState([]);
    const[ev,setEv]=useState([]);
    //const[or,setOr]=useState([]);

    
    useEffect(()=>{
        
       fetch("http://localhost:8080/getartist")
        .then(resp=>resp.json())
        .then(a=>setAr(a))
        fetch("http://localhost:8080/getvenue")
        .then(resp=>resp.json())
        .then(v=>setEv(v))
       },[])

       const[organizer,setOraganizer]=useState(null);
       useEffect(()=>{
           const loginid=JSON.parse(localStorage.getItem("loggedUser")).id;
           fetch("http://localhost:8080/getorname?login_id="+loginid)
           .then(resp=>resp.json())
           .then(obj=>{
               localStorage.setItem("loggedCustomer",JSON.stringify(obj))
               setOraganizer(obj);
           })
       },[])
       
   
    const init ={
       event_name:"",
       description:"",
       event_date:"",
       duration:"",
       price:"",
       gencatid:"",
       vid:"",
       oid:null,
       eventimg:"",
       starttime:"",
         }

  

   const reducer= (state,action)=>{
    switch(action.type)
    {
        case 'update':
            return {...state ,[action.fld]:action.val}
        case 'reset':
            return init;
    }
     }

const [info,dispatch]= useReducer(reducer,init);
   const [file,setFile]=useState();
   const sendData = (e) => {
    e.preventDefault();
    const reqOptions={
        method:'POST',
        headers:{'content-type':'application/json'},
        
        body:JSON.stringify({event_name:info.eventname,description:info.description,event_date:info.eventdate,duration:info.dtime,price:info.price,starttime:info.stime,gencatid:info.artistname,vid:info.venuename,oid:organizer.id})
    }
    
    fetch("http://localhost:8080/insertevent",reqOptions)
    .then(resp => {if(resp.ok)
                      return resp.text();
                    else
                      throw new Error("Server error");
                   })
    .then(text => text.length ? JSON.parse(text):{})
    .then(obj=>console.log(obj))

     navigate("/addeventsuccess");
     }
        


   
    return (
        <div>
         <OrgNavComp/>
         <h3>Event Journey Starts with You: Form the Magic - schedule your event here </h3>
        <div className="container">
           
                <form className="form-group">
            <label htmlFor="eventname" className="form-label">Event name:</label>
            <input type="text" className="form-control" id="eventname" placeholder="Enter event name" name="event_name" value={info.eventname}
            onChange={(e)=>{dispatch({type:'update',fld:'event_name',val:e.target.value})}}/>
            <label htmlFor="eventdate" className="form-label">Event Date:</label>
            <input type="date" className="form-control" id="eventdate" name="event_date" value={info.eventdate}
            onChange={(e)=>{dispatch({type:'update',fld:'event_date',val:e.target.value})}}/>
            <label htmlFor="stime" className="form-label">StartTime:</label>
            <input type="text" className="form-control" id="stime" name="starttime" value={info.stime}
            onChange={(e)=>{dispatch({type:'update',fld:'starttime',val:e.target.value})}}/>
            <label htmlFor="dtime" className="form-label">Duration:</label>
            <input type="text" className="form-control" id="stime" name="duration" value={info.dtime}
            onChange={(e)=>{dispatch({type:'update',fld:'duration',val:e.target.value})}}/>
            <label htmlFor="description" className="form-label">description:</label>
            <input type="text" className="form-control" id="etime" name="description" value={info.description}
            onChange={(e)=>{dispatch({type:'update',fld:'description',val:e.target.value})}}/>
            <label htmlFor="price" className="form-label">Price:</label>
            <input type="number" className="form-control" id="price" name="price" value={info.price}
            onChange={(e)=>{dispatch({type:'update',fld:'price',val:e.target.value})}}/>
            <label htmlFor="artistname" className="form-label">Artist Name:</label>
            <select type="text" className="form-select" id="artistname" name="gencatid" value={info.artistname}
            onChange={(e)=>{dispatch({type:'update',fld:'gencatid',val:e.target.value})}}>
                <option></option>
            {
                ar.map(a=>{
                    return (
                           <option value={a.genre_cat_id.id}>{a.first_name}</option>
                    )
                })

               
            }
            </select>
            <label htmlFor="venuename" className="form-label">Venue Name:</label>
            <select type="text" className="form-select" id="venuename" name="vid" value={info.venuename}
            onChange={(e)=>{dispatch({type:'update',fld:'vid',val:e.target.value})}}>
                <option></option>
            {
                ev.map(e=>{
                    return<option value={e.id}>{e.venue_name}</option>
                })
            }
            </select>
             <label htmlFor="orgid" className="form-label">Organiser ID:</label>
            <input type="number" className="form-control" id="orgid" name="oid" value={organizer && organizer.id}
           /> 
            <label htmlFor="picturel" className="form-label">choose landscape image</label>
            <input type="file" className="form-label" id="picture1" name="picture1" onChange={(e)=>setFile(e.target.files[0])}></input>
           {/* <label htmlFor="picture2" className="form-label">choose potrait image</label>
        <input type="file" className="form-label" id="picture2" name="picture2" onChange={(e)=>setFile(e.target.files[0])}></input>*/}
            <button type="submit" className="btn btn-primary" onClick={(e)=>{sendData(e)}}>Schedule</button>
              {/* <p>{organizer && organizer.company_name}</p> */}
            </form>
            {<p>{JSON.stringify(info)}</p>} 
        </div>
        </div>
    )
        
}