import OrgNavComp from "./OrgNavComp";
import "./OrgApprovedReq.css"
import { useEffect, useState } from "react";



export default function Approvedreq(){
    const oid=JSON.parse(localStorage.getItem("loggedCustomer")).id;

    const[sa,setApprovedTkt]=useState([]);
    useEffect(()=>{
      fetch("http://localhost:8080/getbyorg?oid="+oid)
      .then(resp=>resp.json())
      .then(e=>setApprovedTkt(e))
  },[])


    return(
        <div>
            <OrgNavComp/>
            {sa.map((r,index)=>
               <div class="card">
                <h5 class="card-header">{r.art_id.first_name} {r.art_id.last_name}</h5>
                <div class="card-body">
                    <h5 class="card-title">Approved your request </h5>
                    <p class="card-text">You can contact artist at </p>
                    <p class="card-text"><b>Email ::</b> {r.art_id.email}     <b>Contact No ::</b> {r.art_id.contact_no}</p>

                </div>
                </div>
                )}
        </div>
    )
}