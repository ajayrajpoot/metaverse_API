var Company = require('../modules/CompanySchema');

exports.addCompany = async (req, res) => {
    console.log("req.body", req.body);
    try {
        var p = {
            CompanyName: req.body.CompanyName,
            Logo: req.body.Logo,
            Address: req.body.Address,
            Uniqueuserscurrentlyviewing: req.body.Uniqueuserscurrentlyviewing,
            Totalviews: req.body.Totalviews,
            UserId: req.body.UserId,
        }
        if (req.body._id == 0) {
            var company = new Company(p)
            var result = await company.save();

            if (result._id) {
                res.status(201).json({ Message: 'Add Company!', response: result, Result: true });
            } else {
                res.status(201).json({ Message: 'Not Add Company!', response: result, Result: false });
            }
        } else {
            var result = await Company.updateOne({ UserId: req.body.UserId }, p, { upsert: true });

            if (result.ok == 1) {
                res.status(201).json({ Message: 'Update Company!', response: result, Result: true });
            } else {
                res.status(201).json({ Message: 'Note Update Company !', response: result, Result: false });
            }
        }
    } catch (e) {
        res.status(201).json({ Message: e.message, response: e, Result: false });
    }
}
exports.getCompany = async (req, res) => {
    try {
        var company = await Company.find({});
        res.send({ Company: company });
    } catch (error) {
        res.status(201).json({ Message: error.message, response: error, Result: false });
    }
}
exports.deleteCompany = async (req, res) => {

    try {
        var result = await Company.deleteOne({ _id: req.query._id }, { isDeleted: 1 });
        if (result.ok == 1) {
            res.status(201).json({ Message: 'Delete Company!', response: result, Result: true });
        } else {
            res.status(201).json({ Message: 'Not Delete Company !', response: result, Result: false });
        }
    } catch (error) {
        res.status(201).json({ Message: error.message, response: error, Result: false });
    }


}