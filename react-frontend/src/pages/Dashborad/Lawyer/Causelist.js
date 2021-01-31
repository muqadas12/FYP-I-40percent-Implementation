import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Causelist.css"
import causeList from "../../../assets/Images/cll.jpg";
import {GridComponent,ColumnsDirective,ColumnDirective,Page,Inject,Filter} from "@syncfusion/ej2-react-grids"

import ListAltIcon from '@material-ui/icons/ListAlt';

import { Container } from "reactstrap";
import paginationFactory from "react-bootstrap-table2-paginator";

const defaultImg =
  "https://www.flaticon.com/premium-icon/icons/svg/1993/1993420.svg";
export const CauseList = () => {
  let [dataList, setDataList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const[input,setInput]=useState("");


  useEffect(() => {
    
    axios
      .get("http://localhost:2000/api/lawyer/data/list")
      .then((res) => {
        console.log(res.data)
        setDataList(res.data.dataList);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
        setIsLoading(false);
      });
  }, []);

  
const handleChange=(e)=>{
  e.preventDefault();
  setInput(e.target.value);
  

}
if(input.length>0){
  dataList=dataList.filter((i)=>{
    return i.caseNumber.match(input);
  })
}

  


  return (
    <div>
    <img className="responsive-image" src={causeList} />
    <h2 className="cause-list-search">Cause List :</h2>
    <Container className="mt-4" fluid>
      <div className="col-md-12 ">
        {isLoading ? (
          <>
            
          </>
        ) : (

          <div className="row">
            <div className="col-md-12 mb-3 h-80vh">
              <div className="divi">
              <label className="search-b-1">Search By Case No:</label>
              <input type="texttt"  className="search-box-case" placeholder="Search" onChange={handleChange} value={input}/>
              </div>
              <br/>
              <br/>
            
              <div className="col-md-12 mb-3 d-flex">
              <div className="col-md-1 d-flex">

                <span className="cause-list-srno">SrNo</span>
              </div>

              <div className="cause-list-cno">
                <span>Case Number</span>
              </div>

              <div className="cause-list-pno">
                <span >Party Name</span>
              </div>

              <div className="cause-list-lawyer-name">
                <span >Lawyer</span>
              </div>
              <div className="cause-list-fix-time">
                <span >Fixation Time</span>
              </div>
              
            </div>



              {dataList.map((list) => {
                const {
                  srNo,
                  caseNumber,
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
                    
                      <span className="text-capitalize">{srNo}</span>
                    </div>
                  
                    <div className="col-md-1 d-flex">
                      <span className="case-no-h" >{caseNumber}</span>
                    </div>

                    <div className="col-md-4 ">
                      <span className="party-name-h1">{partyName}</span>
                    </div>
                    <div className="col-md-3 ">
                      <span >{lawyer}</span>
                    </div>
                    <div className="col-md-3 ">
                      <span >
                     <tr>{FixationTime}</tr>
                        
                        </span>
                    </div>
                   
          
                    
          
                   </div>
                  
                );
                
              })}
              
            </div>
            
           
          </div>
        )}
      </div>
      
    </Container>
    </div>
  );
};
export default CauseList;




// import React,{useEffect,useState} from "react";
// import data from "./data.json"
// import "./Causelist.css"
// import {GridComponent,ColumnsDirective,ColumnDirective,Page,Inject,Filter,Edit,Toolbar,ToolbarItems,
//     EditSettingsModel} 
//     from "@syncfusion/ej2-react-grids"
// import {Query, DataManager,ODataV4Adaptor} from "@syncfusion/ej2-data"
// import {Ajax} from "@syncfusion/ej2-base"
//     // const data: DataMnager =new DataManager({
//     //   url:'http://localhost:2000/api/lawyer/data/list',
//     //   adaptor:new ODataV4Adaptor()
//     // })

  
//     const query=new Query().addParams('sort','PartyName');
//     const editOptions: EditSettingsModel ={allowEditing:true,allowAdding:true,allowDeleting:true}
//     const toolbarOptions:ToolbarItems[]=['Add','Edit','Delete','Update','Cancel']

//     const CauseList=()=>{
     
//     return(
//    <div  style={{ margin:'10%',marginTop:'5%', width:"100" }}>
//        <GridComponent className="columnone" dataSource={data} allowPaging={true} pageSettings={{pageSize:10}} 
//     //    allowFiltering={true}
//        query={query}
//        editSettings={editOptions}
//        toolbar={toolbarOptions}
       
//        >
//        <ColumnsDirective  >
//        <ColumnDirective className="columnone" field="srNo" headerText="SrNo" textAlign="Right" width="90"/>
//        <ColumnDirective field="caseNumber" headerText="caseNumber"  width="150"/>
//        <ColumnDirective field="caseYear" headerText="caseYear"  width="170"/>
//        <ColumnDirective field="partyName" headerText="partyName" width="470" marginLeft="60"/>
//        <ColumnDirective field="lawyer" headerText="lawyer" width="470"/>
//        <ColumnDirective field="FixationTime" headerText="FixationTime"  width="100"/>

       
       
//        </ColumnsDirective>
//        <Inject services={[Page,Edit,Toolbar]}/>
//        </GridComponent>
//    </div>
//     )
//     }
// export default CauseList;