const mongoose=require("mongoose")

const RecordSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Party:{
        type:String,
        required:true
    },
    uploadPlaint: { type:Object},
 uploadDocx: { type:Object}
})
const  Record=mongoose.model("Record",RecordSchema)

module.exports= Record;