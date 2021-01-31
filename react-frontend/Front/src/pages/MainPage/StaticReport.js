import React from "react";
import LineChart from "./Charts/LineChart"
import "./Report.css";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
const StaticReport=(props)=>{
    return(
        <div>
            
            {/* <LineChart/> */}
            <div>
            <button className="forward-one-button" onClick={() => {
                props.history.push("/BarChart");
              }}><span className="material-icons">
              <ArrowForwardIosIcon/>
              </span></button>
              <LineChart/>
              </div>
           
           
            </div>
    )
}

export default StaticReport;