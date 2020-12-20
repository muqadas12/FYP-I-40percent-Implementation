import React, { Fragment } from "react"
import cms1 from "../../assets/Images/cms33.jpg";
import "./Modules.css"
import ListIcon from '@material-ui/icons/List';
import InfoIcon from '@material-ui/icons/Info';
import AlbumIcon from '@material-ui/icons/Album';
import ListAltIcon from '@material-ui/icons/ListAlt';

const Modules=(props)=>{
    return(
        <div>
    <img className="responsive-image" src={cms1} alt="My logo" />
    <button onClick={() => {
          props.history.push("/CaseInfo");
        }}
    
    className="btn-1">Update Case Information<span class="material-icons"><InfoIcon/></span>
    </button>
<button onClick={() => {
          props.history.push("/CMS/CauseListCMS");
        }}

className="btn-2">Update Cause List <span class="material-icons"><ListIcon/></span></button>
     <button onClick={() => {
          props.history.push("/CaseRecordCMS");
        }}
     className="btn-3">Update case Record<span class="material-icons"><AlbumIcon/></span></button>
    <button onClick={() => {
          props.history.push("/CMS/ESummonCMS");
        }}
    
    className="btn-4">E-summon Status<span class="material-icons"><ListAltIcon/></span></button>


        </div>
       
    )
}
export default Modules

