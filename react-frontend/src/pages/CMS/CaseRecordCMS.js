// import React from "react";
// import "./Record.css"
// import {GridComponent,ColumnsDirective,ColumnDirective,Page,Inject,Filter,Edit,Toolbar,ToolbarItems,
//     EditSettingsModel} 
//     from "@syncfusion/ej2-react-grids"
// import {Query} from "@syncfusion/ej2-data"
// // import {AgGridReact} from "ag-grid-react"
// // import 'ag-grid-community/dist/styles/ag-grid.css';
// // import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
// const CaseRecordCMS=()=>{
//     const data=[
//         {Name:"Mr. Afnan Karim Kundi",Party:"Muhammad Hayat",pdf:'abc'},
//         {Name:"Advocate General, KPK Mr. Amjad Ali",Party:"Akbar Ali v. The State",pdf:'abc'},
//         {Name:"Mr. Tanveer-ul-Islam",Party:"Farhan Aslam & others v. Mst. Nuzba Shaheen & another",pdf:'abc'},
//         {Name:"Mr. Imran Fazal",Party:"Dr. Zohara Jabeen, etc v. Muhammad Aslam Pervaiz",pdf:'abc'},
//         {Name:"Mr. Afnan Karim Kundi",Party:"Muhammad Nawaz",pdf:'abc'},

//     ]
//     const columns=[
//         {
//             headerText:"Name",field:'Name',
//         },
//         {
//             headerText:"PartyName",field:'PartyName',
//         }
//         ,
//         {
//             headerText:"pdf",field:'pdf',
//         }
//     ]

//     const defaultColDef={
//         sortable:true,editable:true,filter:true
//     }
//     const query=new Query().addParams('sort','PartyName');
//     const editOptions: EditSettingsModel ={allowEditing:true,allowAdding:true,allowDeleting:true}
//     const toolbarOptions:ToolbarItems[]=['Add','Edit','Delete','Update','Cancel']
//     return(
//    <div  style={{ margin:'10%',marginTop:'5%' }}>
//        <GridComponent dataSource={data} allowPaging={true} pageSettings={{pageSize:4}} 
//     //    allowFiltering={true}
//        query={query}
//        editSettings={editOptions}
//        toolbar={toolbarOptions}
       
//        >
//        <ColumnsDirective   ColumnDirective ={columns} />
//        <Inject services={[Page,Edit,Toolbar]}/>
//        </GridComponent>
//    </div>
//     )
// }
// export default CaseRecordCMS;




import React,{useState} from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import pdf from "../../assets/Images/pdf.PNG"
import "./Record.css";
// Icons
import EditIcon from "@material-ui/icons/EditOutlined";
import DoneIcon from "@material-ui/icons/DoneAllTwoTone";
import RevertIcon from "@material-ui/icons/NotInterestedOutlined";
import affidavitone from "../../pdfs/Affidavit_h.pdf"
import affidavittwo from "../../pdfs/Affidavit_a.pdf"
import affidavitthree from "../../pdfs/Affidavit_f.pdf"
import affidavitfour from "../../pdfs/Affidavit_d.pdf"
import affidavitfive from "../../pdfs/Affidavit_mn.pdf"

import vakalatnamaone from "../../pdfs/vakalat_kundi.pdf"

import vakalatnamatwo from "../../pdfs/vakalat_amjad.pdf"
import vakalatnamathree from "../../pdfs/vakalat_tanveer.pdf"
import vakalatnamafour from "../../pdfs/vakalat_imran.pdf"
import vakalatnamafive from "../../pdfs/vakalat_afnan.pdf"

import witnesstwo from "../../pdfs/Witness_2_services.pdf"
import witnessfive from "../../pdfs/Witness_afnan_5.pdf"
import axios from 'axios';
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  },
  selectTableCell: {
    width: 180
  },
  tableCell: {
    width: 170,
    height: 40
  },
  input: {
    width: 170,
    height: 40
  }
}));

const createData = (name, calories, fat, carbs, protein) => ({
  id: name.replace(" ", "_"),
  name,
  calories,
  fat,
  carbs,
  protein,
  isEditMode: false
});

const CustomTableCell = ({ row, name, onChange }) => {
  const classes = useStyles();
  const { isEditMode } = row;
  return (
    <TableCell align="left" className={classes.tableCell}>
      {isEditMode ? (
        <Input
          value={row[name]}
          name={name}
          onChange={e => onChange(e, row)}
          className={classes.input}
        />
      ) : (
        row[name]
      )}
    </TableCell>
  );
};

function CaseRecordCMS() {
  const [uploadPlaint, setuploadPlaint] = useState();
  const [uploadDocx, setuploadDocx] = useState();
  const [rows, setRows] = React.useState([
    
    createData("Mr. Afnan Karim Kundi","Muhammad Hayat",
     <span ><a href={affidavitone}><img className="pdf-affi" src={pdf}/></a>
    <input type="file" id="file" name="file" accept=".pdf,.jpg" onChange={event => {

const uploadPlaints = event.target.files[0]
setuploadPlaint(uploadPlaints)
console.log(uploadPlaints)
}} /></span>,
      <span ><a href={vakalatnamaone}><img className="pdf-affi" src={pdf}/></a>
       <input type="file" id="file" name="file" onChange={event => {
          const uploadDocx = event.target.files[1]
          setuploadDocx(uploadDocx)
          console.log(uploadDocx)


        }} />
      
      </span>,
      <span ><a href={witnesstwo}><img className="pdf-affi" src={pdf}/></a>
      <input className="oneeee" type="file"/></span>,),

    createData("Advocate General, KPK Mr. Amjad Ali","Akbar Ali v. The State",
    <span ><a href={affidavittwo}><img className="pdf-affi" src={pdf}/></a>
    <input className="oneeee" type="file"/></span>,
     <span ><a href={vakalatnamatwo}><img className="pdf-affi" src={pdf}/></a>
     <input  type="file"/></span>,
     <span ><a href={witnesstwo}><img className="pdf-affi" src={pdf}/></a>
     <input className="oneeee" type="file"/></span>
    
    
    ),
    createData("Mr. Tanveer-ul-Islam","Farhan Aslam & others v. Mst. Nuzba Shaheen & another",
    <span ><a href={affidavitthree}><img className="pdf-affi" src={pdf}/></a>
    <input className="oneeee" type="file"/></span>,
     <span ><a href={vakalatnamathree}><img className="pdf-affi" src={pdf}/></a>
     <input  type="file"/></span>,
     <span ><a href={witnesstwo}><img className="pdf-affi" src={pdf}/></a>
     <input className="oneeee" type="file"/></span>
    
    
    ),
    createData("Mr. Imran Fazal","Dr. Zohara Jabeen, etc v. Muhammad Aslam Pervaiz", 
    <span ><a href={affidavitfour}><img className="pdf-affi" src={pdf}/></a>
    <input className="oneeee" type="file"/></span>,
     <span ><a href={vakalatnamafour}><img className="pdf-affi" src={pdf}/></a>
     <input  type="file"/></span>,
     <span ><a href={witnessfive}><img className="pdf-affi" src={pdf}/></a>
     <input className="oneeee" type="file"/></span>
    
    
    ),

    createData("Mr. Afnan Karim Kundi","Muhammad Nawaz", 
    <span ><a href={affidavitfive}><img className="pdf-affi" src={pdf}/></a>
    <input className="oneeee" type="file"/></span>,
     <span ><a href={vakalatnamafive}><img className="pdf-affi" src={pdf}/></a>
     <input  type="file"/></span>,
     <span ><a href={witnessfive}><img className="pdf-affi" src={pdf}/></a>
     <input className="oneeee" type="file"/></span>
    
    
    ),

  ]);
  const filesArray = [];
  filesArray.push(uploadPlaint);
  filesArray.push(uploadDocx);
  const formdata = new FormData();
    filesArray.map((file) => formdata.append("img", file));
    axios.post("http://localhost:2000/api/CMS/", formdata
    ).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err)
    })
  
  const [previous, setPrevious] = React.useState({});
  const classes = useStyles();

  const onToggleEditMode = id => {
    setRows(state => {
      return rows.map(row => {
        if (row.id === id) {
          return { ...row, isEditMode: !row.isEditMode };
        }
        return row;
      });
    });
  };

  const onChange = (e, row) => {
    if (!previous[row.id]) {
      setPrevious(state => ({ ...state, [row.id]: row }));
    }
    const value = e.target.value;
    const name = e.target.name;
    const { id } = row;
    const newRows = rows.map(row => {
      if (row.id === id) {
        return { ...row, [name]: value };
      }
      return row;
    });
    setRows(newRows);
  };

  const onRevert = id => {
    const newRows = rows.map(row => {
      if (row.id === id) {
        return previous[id] ? previous[id] : row;
      }
      return row;
    });
    setRows(newRows);
    setPrevious(state => {
      delete state[id];
      return state;
    });
    onToggleEditMode(id);
  };

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell align="left" />
            <TableCell align="left">Lawyer</TableCell>
            <TableCell align="left">Party name</TableCell>
            <TableCell align="left">Affidavit</TableCell>
            <TableCell align="left">Vaqalat Nama</TableCell>
            <TableCell align="left">Witness</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell className={classes.selectTableCell}>
                {row.isEditMode ? (
                  <>
                    <IconButton
                      aria-label="done"
                      onClick={() => onToggleEditMode(row.id)}
                    >
                      <DoneIcon />
                    </IconButton>
                    <IconButton
                      aria-label="revert"
                      onClick={() => onRevert(row.id)}
                    >
                      <RevertIcon />
                    </IconButton>
                  </>
                ) : (
                  <IconButton
                    aria-label="delete"
                    onClick={() => onToggleEditMode(row.id)}
                  >
                    <EditIcon />
                  </IconButton>
                )}
              </TableCell>
              <CustomTableCell {...{ row, name: "name", onChange }} />
              <CustomTableCell {...{ row, name: "calories", onChange }} />
              <CustomTableCell {...{ row, name: "fat", onChange }} />
              <CustomTableCell {...{ row, name: "carbs", onChange }} />
              <CustomTableCell {...{ row, name: "protein", onChange }} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default CaseRecordCMS;