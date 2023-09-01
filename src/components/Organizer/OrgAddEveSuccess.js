import { useNavigate } from "react-router-dom";

import OrgNavComp from "./OrgNavComp";

export default function AddEveSuccess(){
   
    let navigate=useNavigate();
    return(
       <div>
         <OrgNavComp/> 
        <h5>Event Scheduled successfully</h5>
        <button type="button" class="btn btn-primary btn-lg btn-block" onClick={()=>{{navigate("/viewartists")}}}>Explore artists</button>
       </div>
    )
    }