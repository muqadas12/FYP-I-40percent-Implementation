import React, { Fragment } from "react"
import cms1 from "../../../assets/Images/modd.jpg";
 import "./Mod.css"
import ListIcon from '@material-ui/icons/List';
import InfoIcon from '@material-ui/icons/Info';
import AlbumIcon from '@material-ui/icons/Album';
import ListAltIcon from '@material-ui/icons/ListAlt';
import VideocamIcon from '@material-ui/icons/Videocam';


const JudgeMod=(props)=>{
    return(
        <div>
    <img className="responsive-image" src={cms1} alt="My logo" />
    <button onClick={() => {
          props.history.push("/CaseRecord");
        }}
    
    className="btn-1">Case Record<span class="material-icons"><InfoIcon/></span>
    </button>
<button onClick={() => {
          props.history.push("/ViewEFilling");
        }}

className="btn-2">View EFiling of case<span class="material-icons"><ListIcon/></span></button>
     <button onClick={() => {
          props.history.push("/ESummon");
        }}
     className="btn-3">ESummon Status<span class="material-icons"><AlbumIcon/></span></button>
    <button onClick={() => {
          props.history.push("/CaseProceeding");
        }}
    
    className="btn-4">Case Proceeding<span class="material-icons"><VideocamIcon/></span></button>


        </div>
       
    )
}
export default JudgeMod;

