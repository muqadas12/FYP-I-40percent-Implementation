import React, { useState, useEffect } from "react";
import axios from 'axios';
 import "./CauseList.css";
import caseInfo from "../../assets/Images/uclll.png";
import Box from "../../components/Box"
import {GridComponent,ColumnsDirective,ColumnDirective,Page,Inject,Filter,Edit,Toolbar,ToolbarItems,
  EditSettingsModel} 
  from "@syncfusion/ej2-react-grids"
import {Query} from "@syncfusion/ej2-data"
// import {AgGridReact} from "ag-grid-react"
// import 'ag-grid-community/dist/styles/ag-grid.css';

const CauseListCMS= () => {

  const [Caseno, setCaseno] = useState("");
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [caseYear, setcaseYear] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:2000/api/lawyer/data/list')
      .then((res) => {
        setData(res.data.dataList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = () => {
    const search = data.filter(x => x.caseNumber == Caseno && x.caseYear == caseYear);
    console.log(Caseno, caseYear);
    console.log(data);
    console.log(search);
    setSearchData(search);
    setShow(true);
  }

  const handleChangeCaseno = (e) => {
    setCaseno(e.target.value);
  }

  const handleChangecaseYear = (e) => {
    console.log(e.target.value);
    setcaseYear(e.target.value);
  }



  return (

    <div>
      <img className="causelist-image" src={caseInfo} />

      <h3 className="j-search">Update Cause List:</h3>
      <br />
      <Box />
      <br />

      <form className="d-flex flex-column justify-content-center align-items-center">

        <label className="case-no-caseinfo">Caseno:</label>
        <select
          className="caseno-cms"
          onChange={handleChangeCaseno}>
          <option name="select judge name" disabled>Select Caseno</option>
          {data.length > 0 ? <>
            {data.map(el => (
              <option name={el.caseNumber}>{el.caseNumber}</option>
            ))}
          </> : null}

        </select>
        <label className="caseyear-caseinfo">Caseyear:</label>
        <select
          onChange={ handleChangecaseYear}
          className="caseyear-cms">
          <option name="select party name" disabled>Select case year</option>
          {data.length > 0 ? <>
            {data.map(el => (
              <option name={el.caseYear}>{el.caseYear}</option>
            ))}
          </> : null}

        </select>

      </form>
      <button onClick={handleSubmit} className="cms-update-asd" > Search </ button>
      <br/>
      <br/>
      {show ? (
        <>

          <div className="row">
            <div className="col-md-12 mb-3 d-flex">
              <div className="col-md-2 d-flex">

                <span className="text">Sr No</span>
              </div>

              <div className="case-number">
                <span>CaseNumber</span>
              </div>
              <div className="case-year-cause">
                <span>Caseyear</span>
              </div>

              <div className="party-list-update">
                <span >PartyName</span>
              </div>

              <div className="lawyer-update-list">
                <span >Lawyer</span>
              </div>
              <div className="fix-update-cause">
                <span >Fixation Time</span>
              </div>
             
              
            </div>
            <div className="col-md-12 mb-3 h-80vh">

              {searchData.map((list) => {
                const {
                 srNo,
                 caseNumber,
                 caseYear,
                 partyName,
                 lawyer,
                 FixationTime
                } = list;
                return (


                  <div 
                    key={srNo}
                    className="row justify-content-around p-3 align-items-center shadow-sm"
                  >



                    <div className="col-md-1 d-flex">
                      <span editable={true} classname="srno-update-list">{srNo}</span>
                    </div>

                    <div className="col-md-1">
                      <span editable={true} className="case-year-list">{caseNumber}</span>
                    </div>
                    <div className="col-md-1">
                      <span className="case-yr-update">{caseYear}</span>
                    </div>

                    <div className="col-md-3 ">
                      <span className="party-up-list">{partyName}</span>
                    </div>
                    <div className="col-md-2">
                      <span className="lawyer-update-caselist" >{lawyer}</span>
                    </div>
                    <div className="col-md-2">
                    <span  className="fixtime-list" >{FixationTime}</span>
                    </div>
                   
                    {/* <button onClick={()=>update(list._id)} >Update</button> */}

                    {/* <button onClick={()=>update(list._id)} className="update-case-info-cms">Update</button> */}




                    <Inject services={[Page,Edit,Toolbar]}/>
                  </div>
                  
                )
              })}
            </div>
          </div>
        </>) : null}
    </div>

  )
}
export default CauseListCMS;









