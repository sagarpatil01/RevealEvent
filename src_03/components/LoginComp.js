import './LoginComp.css'
import {useReducer, useState, } from 'react';
import { Link, Route, Routes,useNavigate } from 'react-router-dom';

export default function LoginComp()
{
    const init ={
        uid:"",
        pwd:""
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
        fetch("http://localhost:8080/checkLogin",reqOptions)
        .then(resp => {if(resp.ok)
                          return resp.text();
                        else
                          throw new Error("Server error");
                       })
        .then(text => text.length ? JSON.parse(text):{})
        .then(obj => {
                       if(Object.keys(obj).length === 0)
                       {
                        setMsg("Wrong UID/PWD");
                       }
                       else
                       {
                        if(obj.status === false)
                        {
                            alert("Request has not been approved");
                        }
                        else{
                            if(obj.role_id.role_id === 1)
                            {
                                

                            }else if(obj.role_id.role_id === 2)
                            {

                            }else if(obj.role_id.role_id === 3)
                            {

                            }else if(obj.role_id.role_id === 4)
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
                    <label for="uid" class="form-label"><b>Username :</b></label> 
                    <input type="text" class="form-control" id="uid" name="uid" placeholder='Username' value={info.uid}
                    onChange={(e)=>{dispatch({type:'update',fld:'uid',val:e.target.value})}}></input>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div className="mb-3">
                     <label for="pwd" class="form-label"><b>Password :</b></label> 
                    <input type="password" class="form-control" id="pwd" name="pwd" placeholder='Password' value={info.pwd} 
                    onChange={(e)=>{dispatch({type:'update',fld:'pwd',val:e.target.value})}}></input>
                <div id="emailHelp" class="form-text">....</div>
                </div>

                <button type="submit" className='btn btn-primary' onClick={(e)=>{sendData(e)}}>Submit</button>
                <button type="reset" className='btn btn-primary' onClick={()=>{dispatch({type:'reset'})}}>Clear</button>
                    
                <p>{JSON.stringify(info)}</p>
                <p>{msg}</p>
            </form>
            
        </div>
    )
}