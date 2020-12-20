import React, { useState } from "react";
import court from "../../assets/Images/bgef1.jpg";
import "./File.css"
import axios from "axios"
function File() {


  const [LawyerName, setLawyerName] = useState();
  const [PartyName, setPartyName] = useState();
  const [uploadPlaint, setuploadPlaint] = useState();
  const [uploadDocx, setuploadDocx] = useState();

  const send = event => {
    const filesArray = [];
    filesArray.push(uploadPlaint);
    filesArray.push(uploadDocx);
    alert("Your case has been filed!")

    const formdata = new FormData();
    filesArray.map((file) => formdata.append("images", file));
    formdata.append("LawyerName", LawyerName);
    formdata.append("PartyName", PartyName);


    axios.post("http://localhost:2000/api/lawyer/", formdata
    ).then(res => {
      console.log(res.data.place);
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div>
      <img className="responsive-image" src={court} />
      <form action="#" method="post" enctype="multipart/formdata" >
        <label className="l-n" htmlFor="lawyername">Lawyer Name:</label>
        <input
          type="texts"
          id="lawyername"
          onChange={event => {
            const { value } = event.target;
            setLawyerName(value)
          }}
        />
        <br />
        <label className="p-n" htmlFor="Partyname">Party Name:</label>
        <input
          type="textss"
          id="Partyname"
          onChange={event => {
            const { value } = event.target;
            setPartyName(value)
          }}
        />
        <br />
        <label className="u-c" htmlFor="file">Upload Plaint:</label>
        <input type="file" id="file" name="file" accept=".pdf,.jpg" onChange={event => {

          const uploadPlaints = event.target.files[0]
          setuploadPlaint(uploadPlaints)
          console.log(uploadPlaints)
        }} />
        <br />
        <label className="u-c" htmlFor="filetwo">Upload Docx:</label>
        <input type="file" id="file" name="file" onChange={event => {
          const uploadDocx = event.target.files[0]
          setuploadDocx(uploadDocx)
          console.log(uploadDocx)


        }} />

      </form>
      <button onClick={send} 
      className="submit-button"
      
      
      >Submit</button>
    </div>

  )
}
export default File;











