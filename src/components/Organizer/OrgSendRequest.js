import { Navigate, useNavigate } from "react-router-dom";
import OrgNavComp from "./OrgNavComp";

export default function SendRequest(){
    let navigate=useNavigate();


    return (
        <div>
            <OrgNavComp></OrgNavComp>
            <h3>Request sent successfully</h3>
            <button type="button" class="btn btn-primary btn-lg btn-block" onClick={()=>{{navigate("/viewartists")}}}>Explore artists</button>
        </div>
    )
}