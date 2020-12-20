import React from "react";
import updateci from "../../assets/Images/updateci.jpg";
import "./CaseInfo.css"
import Box from "../../components/Box"
import FormTwo from "../../components/FormTwo"
import Ripples from 'react-ripples'

const CaseInfo=()=>{
    return(
        <div>
        <img className="responsive-image" src={updateci} alt="My logo" />
        <h4 className="h-1"> Update Case Info: </h4>
        <br/>
        <Box/>
        <FormTwo/>
        <p className="Hearing-date">Hearing date:</p>
        <hr className="h-d"/>
        <p className="case-status">Case Status:</p>
        <hr className="h-d"/>
        <button className="update-case-info">Click To Update</button>
        </div>





        
       
    )
}
export default CaseInfo;
        {/* <div
  style={{
  display: 'inline-flex',
  borderRadius: 25,
  overflow: 'hidden',
  marginRight:'180px',
  marginTop:"-30px"
}}
> */}
  {/* <Ripples color={'yellow'}>
  <button type="button" className="btn btn-danger">
    Click To Update
  </button>
  </Ripples> */}
