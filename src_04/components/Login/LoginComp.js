import './LoginComp.css'
import {useReducer, useState, } from 'react';
import { Link, Route, Routes,useNavigate } from 'react-router-dom';

export default function LoginComp()
{
    const init ={
        username:"",
        password:""
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
    const [msg,setMsg]= useState("");
    const navigate = useNavigate();

    const sendData = (e) => {
        e.preventDefault();
        const reqOptions={
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(info)
        }
        fetch("http://localhost:8080/login",reqOptions)
        .then(resp => {if(resp.ok)
                          return resp.text();
                        else
                          throw new Error("Server error");
                       })
        .then(text => text.length ? JSON.parse(text):{})
        
        .then(obj => {
                       if(Object.keys(obj).length === 0)
                       {
                        console.log(Object.keys(obj).length);
                        setMsg("Wrong UID/PWD");
                       }
                       else
                       
                       {
                        if(obj.status === false)
                        {
                            alert("Request has not been approved");
                        }
                        else{
                            console.log(obj)
                            if(obj.utype.id === 1)
                            {
                                alert("customer")

                            }else if(obj.utype.id  === 2)
                            {
                                alert("organizer");

                            }else if(obj.utype.id  === 3)
                            {
                                alert("artist")
                            }else if(obj.utype.id  === 4)
                            {
                                navigate("/admin_home");

                            }
                        }
                       }

         }).catch((error) => alert("Server error ,try after some time"))

    }
    return(
        <div className="container " >
            <form>
                <div className="mb-3">
                    <label htmlFor="uid" className="form-label"><b>Username :</b></label> 
                    <input type="text" className="form-control" id="uid" name="username" placeholder='Username' value={info.uid}
                    onChange={(e)=>{dispatch({type:'update',fld:'username',val:e.target.value})}}></input>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div className="mb-3">
                     <label htmlFor="pwd" className="form-label"><b>Password :</b></label> 
                    <input type="password" className="form-control" id="pwd" name="password" placeholder='Password' value={info.pwd} 
                    onChange={(e)=>{dispatch({type:'update',fld:'password',val:e.target.value})}}></input>
                <div id="emailHelp" className="form-text">....</div>
                </div>

                <button type="submit" className='btn btn-primary' onClick={(e)=>{sendData(e)}}>Submit</button>
                <button type="reset" className='btn btn-primary' onClick={()=>{dispatch({type:'reset'})}}>Clear</button>
                    
                <p>{JSON.stringify(info)}</p>
                <p>{msg}</p>
                
            </form>
            
        </div>
    )
}