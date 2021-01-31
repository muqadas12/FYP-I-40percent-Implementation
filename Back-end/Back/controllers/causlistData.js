const dataList=require('./data.json');

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

module.exports = { getList };

// const addData = (req, res) => {
//  const { fixationDate, lawyer, srNo, partyName} = req.body;
// const data = causelistDataSchema({
//     fixationDate,
//     lawyer,
//     partyName, //partyName: partyName
//     srNo,
// });
// data.save()
//     .then(SavedData => {
//         return res.status(201).send({
//             Message: 'Data Created Successfully.',
//             SavedData,
//         });
//     })
//     .catch(err => {
//         return res.status(500).send({
//             Message: 'Unable to Create Unable. Please Try later.',
//             err,
//         });
//     });
// }