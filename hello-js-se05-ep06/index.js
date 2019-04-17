const cfg = require("./knexfile");
const knex = require("knex")(cfg.development);
const morgan = require("morgan")
const bodyParser = require("body-parser")
const express = require("express");
const cors = require("cors")
const app = express();

app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const errorMessage = res => error => res.status(500).send(error)

app.get("/listpessoas", (req, res) => {
    knex("pessoa").select().then( ret => {
        res.send(ret);
        console.log(ret);
    }).catch(errorMessage(res));
});

app.get("/listpessoas/:id", (req, res) => {
    knex("pessoa").where({ idpessoa: req.params.id})
                    .select("idpessoa", 
                            "nomepessoa", 
                            "telefone", 
                            "datanascimentopessoa")
    .then( ret => {
        res.send(ret);
        console.log(ret);
    }).catch(errorMessage(res));
});

app.post("/addpessoa", (req, res) => {
    knex("pessoa").insert(req.body, "idpessoa")
    .then(ret => {
        res.send(ret);
        console.log(ret);
    }).catch(errorMessage(res));
});

app.put("/updatepessoa/:id", (req, res) => {
    knex("pessoa").update(req.query)
                    .where({ 
                        idpessoa: req.params.id 
                    })
    .then(ret => {
        res.send(ret);
        console.log(ret);
    }).catch(errorMessage(res));
});

app.delete("/deletepessoa/:id", (req, res) => {
    knex("pessoa").del()
                    .where({ 
                        idpessoa: req.params.id 
                    })
    .then(ret => {
        res.send(ret);
        console.log(ret);
    }).catch(errorMessage(res));
});

knex.migrate.latest().then(_ =>
    app.listen(3000, _ =>
      console.log("server online!")))