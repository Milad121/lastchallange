const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
var controller = require('../controller/home');
var login = require('../controller/login');
var loginpost = require('../controller/auth');


const questionRoutes = express.Router();



questionRoutes.route("/").get((req, res) => {

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
)
questionRoutes.route("/login").get( login.login);
//questionRoutes.route("/auth").post(
//    )
questionRoutes.route("/register").get(login.register);
//questionRoutes.route("/regauth").post(loginpost.register)
questionRoutes.route("/logou").get(login.logout)
questionRoutes.route("/addquestion").get(login.addquestion);
questionRoutes.route("/addquestion").post(loginpost.addquestion);
questionRoutes.route("/view/:id").get(login.viewquestion);
questionRoutes.route("/addcomment/:id").post(loginpost.addcomment)
questionRoutes.route("/deletcomment/:postid/:id").get(login.deletecomment)
questionRoutes.route("/deletequestion/:id").get(login.deletequestion)
questionRoutes.route("/editquestion/:id").get(login.editquestion)
questionRoutes.route("/updatequestion/:i").post(loginpost.updatequestion)

module.exports = questionRoutes;