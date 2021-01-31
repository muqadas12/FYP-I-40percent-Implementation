const dataList=require('./data.json');
const causelistSchema=require("../models/causelistData")
const getList = (req, res) => {
    try {
        console.log(dataList[0].srNo);
        console.log(dataList[0].lawyer);
        // console.log(dataList[0].partyName);
        //     console.log(dataList[0].caseNumber);
        res.status(200).send({
            dataList
        });
    }catch(err) {
        res.status(500).json(err);
    }
};


const addCauseList = (req, res) => {

    console.log('inside adddata');
    dataList.map(dataa => {
        const {srNo,caseNumber,caseYear,partyName,lawyer,FixationTime} = dataa;
        const data = new causelistSchema({
            srNo,caseNumber,caseYear,partyName,lawyer,FixationTime
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

const getCauselist= (req, res) => {
    causelistSchema.find().then(data => {
        res.status(200).send({ data });
    })
        .catch(err => {
            return res.status(500).send({
                Message: 'Unable to get. Please Try later.',
                err,
            });
        });
}

module.exports = { getList,addCauseList,getCauselist };
