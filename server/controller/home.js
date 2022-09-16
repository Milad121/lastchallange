const { Model } = require("mongoose");
const questionModel = require("../models/question");

const homePage = (req, res) => {

    if (req.session.loggedin) {
        try {
            questionModel
                .find()
                .then((data) => {
                    
                        res.json({
                            questionData: data,
                            req: req,

                        });
                    res.end();
                   
                })
        } catch (e) {
            console.log(e);
            res.end();
        }
    } else {
        res.status(200).send({ "errors": { "login": "you should login" } });
        res.end();
    }
}
module.exports = {

    homePage,

};
