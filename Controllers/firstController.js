const Cause = require('../Models/firstModel')
// create new cause
exports.createCause = async function (req, res) {
    try {
        console.log("api hitted");
        const { id, title, description } = req.body;
        const cause = new Cause.causeModel({
            _id: id,
            title: title,
            description: description,
        });
        const checkDuplicate = await Cause.causeModel.findOne({ 'title': title });

        if (checkDuplicate !== null) {
            throw new Error('Data already exists');
        }
        cause.save()
            .then((newCause) => {
                return res.json({
                    success: true,
                    message: 'New cause created successfully',
                    Cause: newCause,
                });
            })
            .catch((error) => {
                res.json({
                    success: false,
                    message: 'Server error. Please try again.',
                    error: error.message,
                });
            });
    } catch (error) {
        console.log(error.message);
        res.json(error.message);
    }
}

exports.getCause = function (req, res) {
    Cause.causeModel.find({})
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json(error.message)
        })
}