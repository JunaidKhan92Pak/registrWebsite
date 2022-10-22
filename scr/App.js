const express = require("express");
const app = express();
const hbs = require("hbs");
const mongoose = require("mongoose");
const path = require("path");
const port = process.env.PORT || 3000 ;
require("./db/conn")

const saveData = require("./models/saveData");

const websitePath = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const dynamic_path = path.join(__dirname, "../templates/partials");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(websitePath));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(dynamic_path);

//Routing
app.get("/", (req, res) => {
    res.render("home")

});

app.get("/home", (req, res) => {
    res.render("home")

});
app.get("/register", (req, res) => {
    res.render("register")

});

app.post("/register", async (req, res) => {
    try {
        const Password = req.body.password;
        const confrimPassword = req.body.confrimpassword;
        const Email = req.body.email;
        const allEmail = await saveData.findOne({ email: Email })
        if (allEmail) {

            res.send("The User is allready register with this Email Try Another")
        }
        else {
            if (Password === confrimPassword) {
                const userSave = new saveData({
                    firstName: req.body.firstName,
                    lastname: req.body.lastname,
                    email: Email,
                    phone: req.body.phone,
                    dob: req.body.dob,
                    gender: req.body.gender,
                    password: Password,
                    comfrimpassword: confrimPassword
                })
                const result = await userSave.save()
                res.status(201).render("home");
            }
            else {
                res.send("Confrim Password dosenot match to password");
            }
        }
    }
    catch {
        (err) => {
            res.status(404).send(`resgistration Failed Due this error ${err}`)
        }
    }
});

app.get("/login", (req, res) => {
    res.render("login")
});

app.post("/login", async (req, res) => {
    try {
        const email = req.body.email
        const Password = req.body.password
        const loginUser = await saveData.findOne({ email: email })
        if (loginUser) {
            if (loginUser.password === Password) {
                res.status(201).render("home")
            }
            else {
                res.send("invalid User information")
            }
        }
        else {
            res.send("This eamil is not register ")
        }
    }
    catch {
        (err) => {
            console.log(err);
        }
    }
})

//listing the server
app.listen(port ,(err) => {
    console.log(`Server in Running at port ${port}`);
})
