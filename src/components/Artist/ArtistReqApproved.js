 import { useNavigate } from "react-router-dom";
import ArtistNavComp from "./ArtistNavComp";


export default function ApproveRequest(){
    let navigate=useNavigate();


    return (
        <div>
            <ArtistNavComp/>
            <h3>Request Approved</h3>
            <button type="button" class="btn btn-primary btn-lg btn-block" onClick={()=>{{navigate("/view_requests")}}}>View more requests</button>
        </div>
    )
}