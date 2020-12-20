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
router.get("/data/judgment",judgmentData.getJudgment);
router.get("/data/list",dataController.getList );
router.get("/data/cases",casesData.getCase);
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



