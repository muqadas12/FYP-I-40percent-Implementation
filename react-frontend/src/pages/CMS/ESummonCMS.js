
import React, { useState, useEffect } from "react";
import axios from 'axios';
// import "./Latest.css";
import judgment from "../../assets/Images/summ.jpg";
import Box from "../../components/BoxSummon"
 import "./ESummon.css"

const ESummonCMS= () => {

  const [Caseno, setCaseno] = useState("");
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [Caseyear, setCaseyear] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:2000/api/lawyer/data/status')
      .then((res) => {
        setData(res.data.dataStatus);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = () => {
    const search = data.filter(x => x.Caseno == Caseno && x.Caseyear == Caseyear);
    
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




  return (

    <div>
      <img className="resss-image" src={judgment} />

      <h3 className="j-search">Case Status:</h3>
      <br />
      <Box />
      <br />

      <form className="d-flex flex-column justify-content-center align-items-center">

        <label className="summon-name-case-no">Case No:</label>
        <select className="option-summon-case-no"
          // className="w-50 py-2"
          onChange={handleChangeCaseno}>
          <option 
          name="select judge name" disabled>Select Caseno</option>
          {data.length > 0 ? <>
            {data.map(el => (
              <option name={el.Caseno}>{el.Caseno}</option>
            ))}
          </> : null}

        </select>
        <label className="summon-name-case-year">Case Year:</label>
        <select
          onChange={handleChangeCaseyear}
          className="option-summon-year">
          <option name="select party name" disabled>Select Caseyear</option>
          {data.length > 0 ? <>
            {data.map(el => (
              <option name={el.Caseyear}>{el.Caseyear}</option>
            ))}
          </> : null}

        </select>

      </form>
      <br/>
      <br/>
      
      <button onClick={handleSubmit} className="btnsummon" > Search </ button>
      <br/>
      <br/>
      {show ? (
        <>

          <div className="row">
            <div className="col-md-2 mb-3 d-flex">
             

             
            
              
              <div className="n-cssss">
                <span >Case Status</span>
              </div>
              
            </div>
            <div className="col-md-1 mb-3 h-80vh">

              {searchData.map((list) => {
                const {
                 caseStatus,
                 

                } = list;
                return (


                  <div
                    key={Caseno}
                    className="row justify-content-around p-3 align-items-center shadow-sm"
                  >


                  

                    
                    
                   
                    <div className="casestatus">
                    <span >{caseStatus}</span>
                    </div>
                   
                    




                  </div>
                )
              })}
            </div>
          </div>
        </>) : null}
       <p>Want to generate online summon?<a href="/GenerateSummon">Click here to go to page that generate online summon </a></p>

       
    </div>

  )
}
export default ESummonCMS;









