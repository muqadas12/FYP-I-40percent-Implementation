const datafee=require("./fee_data.json");

const getFee = (req, res) => {
    try {
        // console.log(datafee[1].status);
       
        res.status(200).send({
            datafee
        });
    }catch(err) {
        res.status(500).json(err);
    }
};

module.exports = { getFee };



// const { validationResult } = require("express-validator");
// const HttpError = require("../models/http-error")
// const fileUpload = require("../middleware/file-upload")
// const Fees = require("../models/FeeModel")




// const saveFees = async (req, res, next) => {
  

//   const { CaseNo,Caseyear,status } = req.body;


//   console.log(req.files);
//   console.log(LawyerName, PartyName);

//   // const title = req.body.title;
//   const saveFees = new Fee({
//    CaseNo,
//    Caseyear,
//    status
//   });

//   createdPlace.save().then(savedData => {
//     console.log(savedData);
//     res.status(201).json({ place: savedData });
//   })
//     .catch(err => {
//       const error = new HttpError(
//         'Creating case failed, please try again.',
//         500
//       );
//       return next(error);
//     });
// };


// exports.createPlace =saveFees;