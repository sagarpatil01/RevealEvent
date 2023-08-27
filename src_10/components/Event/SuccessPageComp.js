import { useNavigate } from "react-router-dom";
import CustNavComp from "../Customer/CustNavComp";

export default function Success(){
    let navigate=useNavigate();
    return(
       <div>
        <CustNavComp/>
        <h5>Payment successful</h5>
        <h3 text-color="white">Your tickets have been booked you will receive ticket through email.</h3>
        <button type="button" class="btn btn-primary btn-lg btn-block" onClick={()=>{{navigate("/customer_home")}}}>Explore more</button>
       </div>
    )
};