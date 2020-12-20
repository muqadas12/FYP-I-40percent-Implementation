const dataCases=require("./case_data.json");

const getCase = (req, res) => {
    try {
        // console.log(dataCases[1].);
        // console.logdataCases[0].judgmentDate);
        // console.log(dataList[0].lawyer);
        // console.log(dataList[0].partyName);
        //     console.log(dataList[0].caseNumber);
        res.status(200).send({
            dataCases
        });
    }catch(err) {
        res.status(500).json(err);
    }
};

module.exports = { getCase };
