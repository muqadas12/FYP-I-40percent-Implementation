const mongoose=require("mongoose")

const causelistSchema=new mongoose.Schema({
    srNo:{
        type:Number,
        required:true
    },
    partyName:{
        type:String,
        required:true
    },
    lawyer:{
        type:String,
        required:true
    },
    fixationTime:{
        type:String,
        required:true
    }
})
const Causelist=mongoose.model("Causelist",causelistSchema)

module.exports=Causelist;