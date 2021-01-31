const express = require("express");
const { check } = require('express-validator');
const router = express.Router();
const auth = require("../middleware/check-auth");
const judgmentData=require("../controllers/judgmentData");


router.get("/data/judgment",judgmentData.getJudgment);
router.patch("/data/add",judgmentData.addjudgmentData)
