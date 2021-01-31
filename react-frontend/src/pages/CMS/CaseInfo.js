import React, { useState, useEffect } from "react";
import axios from 'axios';
 import "./CaseInfo.css";
import caseInfo from "../../assets/Images/cinfo.jpg";
import Box from "../../components/Box"



const CaseInfo= () => {

  const [Caseno, setCaseno] = useState("");
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [Caseyear, setCaseyear] = useState("");
  const [newCaseyear, setnewCaseyear] = useState("");

  const [show, setShow] = useState(false);
  const [editMode, seteditMode] = useState(false);
  

  useEffect(() => {
    axios
      .get('http://localhost:2000/api/CMS/data/updateInfo')
      .then((res) => {
        setData(res.data.dataCaseInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = () => {
    const search = data.filter(x => x.Caseno == Caseno && x.Caseyear == Caseyear);
    console.log(Caseno, Caseyear);
    console.log(data);
    console.log(search);
    setSearchData(search);
    setShow(true);
  }

  const handleChangeCaseno = (e) => {
    setCaseno(e.target.value);
  }

  const handleChangeCaseyear = (e) => {
    console.log(e.target.value);
    setCaseyear(e.target.value);
  }
const updateCaseyear=(id)=>{
  axios.put("http://localhost:2000/api/CMS/up",{
    id:id,
    newCaseyear:newCaseyear

  })
}
  return (

    <div>
      <img className="caseinfo-image" src={caseInfo} />

      <h3 className="j-search">Case Info:</h3>
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
              <option name={el.Caseno}>{el.Caseno}</option>
            ))}
          </> : null}

        </select>
        <label className="caseyear-caseinfo">Caseyear:</label>
        <select
          onChange={handleChangeCaseyear}
          className="caseyear-cms">
          <option name="select party name" disabled>Select Caseyear</option>
          {data.length > 0 ? <>
            {data.map(el => (
              <option name={el.Caseyear}>{el.Caseyear}</option>
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

                <span className="text">CaseNumber</span>
              </div>

              <div className="case-number">
                <span>Caseyear</span>
              </div>

              <div className="co-case-num">
                <span >PartyName</span>
              </div>

              <div className="co-case-yearrrrr">
                <span >LastHearing</span>
              </div>
              <div className="benchhhhh">
                <span >NextDate</span>
              </div>
              <div className="colll-code">
                <span >Case Status</span>
              </div>
              
            </div>
            <div className="col-md-12 mb-3 h-80vh">

              {searchData.map((list) => {
                const {
                 Caseno,
                 Caseyear,
                 partyName,
                LastHearing,
                 NextDate,
                 caseStatus

                } = list;
                return (


                  <div
                    key={Caseno}
                    className="row justify-content-around p-3 align-items-center shadow-sm"
                  >



                    <div className="col-md-1 d-flex">
                      <span>{Caseno}</span>
                    </div>

                    <div className="col-md-1">
                      <span className="case-year-info">{Caseyear}</span>
                    </div>

                    <div className="col-md-3">
                      <span className="party-caseinfo">{partyName}</span>
                    </div>
                    <div className="col-md-1 ">
                      <span className="lasthearing-caseinfo" >{LastHearing}</span>
                    </div>
                    <div className="col-md-1 ">
                    <span className="nexthearing-caseinfo" >{NextDate}</span>
                    </div>
                    <div className="col-md-2">
                    <span className="casestatus-caseinfo">{caseStatus}</span>
                    </div>
                    
                   


                  

                  </div>
                
                )
                
              })}
            </div>
            
          </div>
          
        </>) : null}
       
        {/* <button>Edit</button> */}
        <input onChange={(event)=>{
          setnewCaseyear(event.target.value)
        }} type="texxxxt" placeholder="new caseyear..."/>
        <button className="update-case-info-cms">Update</button>
       

    </div>

  )
}
export default CaseInfo;


