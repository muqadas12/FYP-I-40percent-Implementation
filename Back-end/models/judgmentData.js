const { FilePondFile } = require("filepond");
const mongoose=require("mongoose")

const causelistSchema=new mongoose.Schema({
    judgmentDate:{
        type:Date,
        required:true
    },
    caseSubject:{
        type:String,
        required:true
    },
    caseNo:{
        type:String,
        required:true
    },
    caseTitle:{
        type:String,
        required:true
    },
    authorJudge:{
        type:String,
        required:true
    },
    Tag:{
        type:String,
        required:true

    },
    download:{
        type:download
       
    }
})
const Causelist=mongoose.model("Causelist",causelistSchema)

module.exports=Causelist;