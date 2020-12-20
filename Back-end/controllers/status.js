const dataStatus=require("./Status_data.json");

const getStatus = (req, res) => {
    try {
        // console.log(dataStatus[1].);
        // console.logdataStatus[0].judgmentDate);
       
        res.status(200).send({
            dataStatus
        });
    }catch(err) {
        res.status(500).json(err);
    }
};

module.exports = { getStatus };
