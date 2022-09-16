const questionModel = require("../models/question")


const login = (req, res) => {
    res.json(arr = {
        req: req,
    });
};
const register = (req, res) => {
    res.json(arr= {
        req: req,
    });
};
const addquestion = (req, res) => {
    if (req.session.loggedin != true) {
        res.status(200).send(arr = { "errors": { "login": "you should login" } });

    } else {
        res.json(arr= {
            req: req,
        });
    }

};
const viewquestion = async (req, res) => {
    if (req.session.loggedin != true) {
        res.status(200).send(arr = { "errors": { "login": "you should login" } });

    } else {
        var currentquestion = await questionModel.findById(req.params.id)
        //.populate("comments")
        if (currentquestion) {
            res.json(arr= {
                req: req,
                question: currentquestion
            });
        }

    }

};
const deletecomment = async (req, res) => {
    if (req.session.loggedin != true) {
        res.status(200).send(arr = { "errors": { "login": "you should login" } });
    } else {

        questionModel.findByIdAndUpdate(req.params.postid, {
            $pull: { 'comments': { _id: req.params.id } }
        }).then(
            res.status(200).json(arr = { "ok": { "url": req.params.postid } })
        
    )
    }

};
const deletequestion = async (req, res) => {
    if (req.session.loggedin != true) {
        res.status(200).send(arr = { "errors": { "login": "you should login" } });
    } else {

        questionModel.findByIdAndDelete(_id = req.params.id)
            .then(() => {
                res.status(200).json(arr = { "ok": { "url": "home" } })
            })
            .catch(err => {
                console.log(err)
            })
    }


};
const editquestion = async (req, res) => {
    if (req.session.loggedin != true) {
        res.status(200).send(arr = { "errors": { "login": "you should login" } });
    } else {


        questionModel.findById(_id = req.params.id)
            .then(question => {
                if (question) {
                    res.json(arr= {
                        req: req,
                        question: question
                    })
                } else {
                    res.status(200).send(arr = { "errors": { "ok": "nothing find" } });
                }
            })
            .catch(err => {
                console.log(err)
            })
    }


};



const logout = (req, res) => {
    req.session.loggedin = false;
    req.session.username = '';
    res.status(200).send(arr = { "errors": { "ok": "home" } });
}
module.exports = {

    login,
    logout,
    register,
    addquestion,
    viewquestion,
    deletecomment,
    deletequestion,
    editquestion,
};