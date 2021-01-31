const dataCaseInfo=require("./CaseInfo.json");
const  caseinfoSchema=require("../models/CaseInfo-model")

const getInfo = (req, res) => {
    try {
        // console.log(dataStatus[1].caseStatus.length);
        // console.log(dataStatus[1].caseStatus.length);
        //  console.count(dataCaseInfo[5].caseStatus)
        // console.logdataStatus[0].judgmentDate);
        res.status(200).send({
            dataCaseInfo
        });
    }catch(err) {
        res.status(500).json(err);
    }
    
};

// module.exports = { getStatus };


const addDataInfo = (req, res) => {

    console.log('inside adddata');
    dataCaseInfo.map(dataa => {
        const {Caseno,Caseyear,partyName,LastHearing, NextDate, caseStatus } = dataa;
        const data = new  caseinfoSchema({
            Caseno,Caseyear,partyName,LastHearing, NextDate, caseStatus
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

const getCaseInfo= (req, res) => {
    caseinfoSchema.find().then(data => {
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

module.exports = { getInfo,addDataInfo,getCaseInfo};