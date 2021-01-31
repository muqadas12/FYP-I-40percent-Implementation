const express = require("express");
const { check } = require('express-validator');
const multer = require('multer')
const auth = require("../middleware/check-auth");
const router = express.Router();
const CaseinfoController=require("../controllers/caseInfo-Controller")
const recordController=require("../controllers/Recors")

const storage = multer.memoryStorage();


const upload = multer({
  storage,
});
router.post(
    '/',
    upload.array('img'),
    recordController.createRecord,
  );
router.get("/data/updateInfo",CaseinfoController.getInfo)
router.patch("/data/addInfo",CaseinfoController.addDataInfo)


router.get("/data/updaterecord",recordController.addRecord)
// router.patch("/data/addrecord",recordController.addRecord)
//  router.put("/up",CaseinfoController.update)

module.exports = router;
