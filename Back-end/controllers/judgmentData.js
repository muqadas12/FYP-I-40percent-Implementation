const dataJudgment=require("./JudgmentData.json");

const getJudgment = (req, res) => {
    try {
        console.log(dataJudgment[1].caseTitle);
        console.log(dataJudgment[0].judgmentDate);
        // console.log(dataList[0].lawyer);
        // console.log(dataList[0].partyName);
        //     console.log(dataList[0].caseNumber);
        res.status(200).send({
            dataJudgment
        });
    }catch(err) {
        res.status(500).json(err);
    }
};

module.exports = { getJudgment };
