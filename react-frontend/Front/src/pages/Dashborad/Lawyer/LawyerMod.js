import React, { Fragment } from "react"
import cms1 from "../../../assets/Images/law44.jpg";
 import "./Mod.css"
import InfoIcon from '@material-ui/icons/Info';
import ListAltIcon from '@material-ui/icons/ListAlt';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import GavelIcon from '@material-ui/icons/Gavel';
import ViewListIcon from '@material-ui/icons/ViewList';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

const LawyerMod=(props)=>{
    return(
        <div>
    <img className="responsive-image" src={cms1} alt="My logo" />
    <button onClick={() => {
          props.history.push("/Causelist");
        }}
    
    className="btn-1">View Cause List<span class="material-icons"><ViewListIcon/></span>
    </button>
<button onClick={() => {
          props.history.push("/Judgment");
        }}

className="btn-2">View Judgments<span class="material-icons"><GavelIcon/></span></button>
     <button onClick={() => {
          props.history.push("/CourtFee");
        }}
     className="btn-3">Online Payment<span class="material-icons"><CreditCardIcon/></span></button>
    <button onClick={() => {
          props.history.push("/CaseStatusLaw");
        }}
    
    className="btn-4">View Case Status<span class="material-icons"><AccountBalanceIcon/></span></button>


        </div>
       
    )
}
export default LawyerMod;

