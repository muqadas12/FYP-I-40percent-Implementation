const dataRecord=require("./Records.json");
const  recordSchema=require("../models/Recordmodel")
const HttpError = require("../models/http-error")
const fileUpload = require("../middleware/file-upload")
const {validationResult}=require("express-validator");

const getRecord = (req, res) => {
    try {
        // console.log(dataStatus[1].caseStatus.length);
        // console.log(dataStatus[1].caseStatus.length);
        //  console.count(dataCaseInfo[5].caseStatus)
        // console.logdataStatus[0].judgmentDate);
        res.status(200).send({
            dataRecord
        });
    }catch(err) {
        res.status(500).json(err);
    }
    
};

// module.exports = { getStatus };


const addRecord = (req, res) => {

    console.log('inside adddata');
    dataRecord.map(dataa => {
        const {Name,Party} = dataa;
        const data = new  recordSchema({
            Name,Party
        });
        data.save()
            .then(SavedData => {
                console.log(SavedData);
            })
            .catch(err => {
                return res.status(500).send({
                    Message: 'Unable to Create Unable. Please Try later.',
                    err,
                });
            });
    })

}

const getRecords= (req, res) => {
    recordSchema.find().then(data => {
        res.status(200).send({ data });
    })
        .catch(err => {
            return res.status(500).send({
                Message: 'Unable to get. Please Try later.',
                err,
            });
        });
}
// const update=(req,res)=>{
//     caseinfoSchema.Caseno=req.body.Caseno;
//     caseinfoSchema.Caseyear=req.body.Caseyear;
//     const id=req.body._id;
// try{
//     caseinfoSchema.findById(id,(updateddata)=>{
//         updateddata.Caseno=Caseno,
//         updateddata.Caseyear=Caseyear
//     })

// }catch(err){
// console.log(err)
// }
// }

const createRecord = async (req, res, next) => {
  

    const {Name, Party} = req.body;
  
  
    console.log(req.files);
    // console.log(Name, Party);
  
    // const title = req.body.title;
    const createdCase = new recordSchema({
      Name,
      Party,
      uploadPlaint: req.files[0],
      uploadDocx: req.files[1]
    });
  
    createdCase.save().then(savedData => {
      console.log(savedData);
      res.status(201).json({ place: savedData });
    })
      .catch(err => {
        const error = new HttpError(
          'Creating record failed, please try again.',
          500
        );
        return next(error);
      });
  };
  
module.exports = {getRecord ,addRecord,getRecords,createRecord};