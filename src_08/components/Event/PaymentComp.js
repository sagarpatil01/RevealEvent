import CustNavComp from "../Customer/CustNavComp";
import paymentimg from "../../static/images/payments.png";
import './PaymentComp.css';
import { useNavigate } from "react-router-dom";
export default function Payment(){
    let navigate=useNavigate();
   return( 
   <div>
    <CustNavComp/>
    <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">description</th>
      {/* <th scope="col">Handle</th> */}
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Event</td>
      <td>Zakir khan show</td>
      {/* <td>@mdo</td> */}
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Artist</td>
      <td>Zakir khan</td>
      {/* <td>@fat</td> */}
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>venue</td>
      <td>Pune</td>
      {/* <td>@twitter</td> */}
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Ticket quantity</td>
      <td>2</td>
      {/* <td>@twitter</td> */}
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Ticket price</td>
      <td>250</td>
      {/* <td>@twitter</td> */}
    </tr>
    <tr>
      {/* <th></th> */}
      <td colSpan={2}><b>Total price</b></td>
      <td>500</td>
      {/* <td>@twitter</td> */}
    </tr>
    {/* <tr>
     <td colSpan={3}><button >Payment</button></td>
    </tr> */}
  </tbody>
</table>
<div className="payment-icon">
    <b >Select payment method :</b>
    <img src={paymentimg} href="#"></img>
    <br/>
    <br/>
    <button type="button" class="btn btn-danger" onClick={()=>{{navigate("/success")}}}>Payment</button>
</div>




</div>)
};