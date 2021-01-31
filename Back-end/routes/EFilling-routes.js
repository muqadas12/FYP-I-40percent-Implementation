const express = require("express");
const multer = require('multer')
const { check } = require('express-validator');

const auth = require("../middleware/check-auth");

const EfileController = require("../controllers/Filecase");
const efilingController = require("../controllers/EFilling-controller");
const fileUpload = require("../middleware/file-upload");
const dataController=require("../controllers/causlistData");
const judgmentData=require("../controllers/judgmentData");
const casesData=require("../controllers/casesData")
const Feestatus=require("../controllers/feeData")
const Fees=require("../controllers/Fees")
const statusData=require("../controllers/status")
const router = express.Router();
const storage = multer.memoryStorage();


const upload = multer({
  storage,
});

router.post(
  '/',
  upload.array('images'),
  efilingController.createPlace,
);
router.get("/data/yearchart", Feestatus.getYearChartData);
router.get("/data/fees",Fees.getFee)
//posting and adding judgment data/////
router.get("/data/judgment",judgmentData.getJudgment);
 router.patch("/data/judgment",judgmentData.addjudgmentData);




 //Causelist/////
// router.get("/data/list",dataController.getList);
router.get("/data/list",dataController.getList)
router.patch("/data/listadd",dataController.addCauseList)



//online casesearch//
router.get("/data/cases",casesData.getCase);
 router.patch("/data",casesData.addData)


 router.get("/data/status",statusData.getStatus);



router.post("/Efile", upload.single('file')


  , EfileController.createCase,
  [
    check('LawyerName')
      .not()
      .isEmpty(),
    check('PartyName')
      .not()
      .isEmpty(),

  ],
)

  
  
module.exports = router;



