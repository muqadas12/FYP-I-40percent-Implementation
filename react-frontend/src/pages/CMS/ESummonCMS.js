import React from "react";
import us from "../../assets/Images/uss.jpg";
import "./ESummon.css"
import Box from "../../components/Box"
import FormTwo from "../../components/FormTwo"
import FormRadio from "../../components/FormRadio"

import Ripples from 'react-ripples'


const  ESummonCMS=()=>{
    return(
        <div>
        <img className="responsive-image" src={us} alt="My logo" />
        <h4 className="summon-top"> Update E-Summon Status:</h4>
        <br/>
        <Box/>
        <FormTwo/>
        <p className="case-status">Status:</p>
        <FormRadio/>
       
      <button className="btnn-summon">Click To Update Summon</button>

     


        </div>

        
   
    )
}
export default ESummonCMS;