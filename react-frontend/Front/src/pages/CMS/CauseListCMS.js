import React from "react";
import ucl from "../../assets/Images/ucl11.jpg";
import "./CauseList.css"
import Box from "../../components/Box"
import FormTwo from "../../components/FormTwo"


const CauseListCMS = () => {
    return (
        <div>
            <img className="responsive-image" src={ucl} alt="My logo" />
            <h4 className="top-heading-one">Update Cause List:</h4>
            <br/>
            <Box/>
            <FormTwo/>
            <button className="update-cause-list">Update Cause List</button>


           

        </div>

    )
}
export default CauseListCMS;