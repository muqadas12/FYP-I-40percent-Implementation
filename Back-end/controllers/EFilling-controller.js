const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error")
const fileUpload = require("../middleware/file-upload")
const EFile = require("../models/EFile-model")

const Dummy_Efilling_form = [
  {
    LawyerName: "zain",
    PartyName: "momina",
   
    
  }
]


const createPlace = async (req, res, next) => {
  

  const { LawyerName, PartyName } = req.body;


  console.log(req.files);
  console.log(LawyerName, PartyName);

  // const title = req.body.title;
  const createdPlace = new EFile({
    LawyerName,
    PartyName,
    uploadPlaint: req.files[0],
    uploadDocx: req.files[1]
  });

  createdPlace.save().then(savedData => {
    console.log(savedData);
    res.status(201).json({ place: savedData });
  })
    .catch(err => {
      const error = new HttpError(
        'Creating case failed, please try again.',
        500
      );
      return next(error);
    });
};


exports.createPlace = createPlace;