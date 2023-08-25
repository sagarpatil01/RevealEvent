import { useNavigate } from "react-router-dom";
import CustNavComp from "../Customer/CustNavComp";

export default function AddEveSuccess(){
    let navigate=useNavigate();
    return(
       <div>
        <CustNavComp/>
        <h5>Event Scheduled successfully</h5>
        <button type="button" class="btn btn-primary btn-lg btn-block" onClick={()=>{{navigate("/viewartists")}}}>Explore artists</button>
       </div>
    )
};