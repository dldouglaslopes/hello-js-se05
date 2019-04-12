const cfg = require("./knexfile")
const knex = require("knex")(cfg.development)
const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const app = express()

app.use(express.static("public"))

app.use(morgan("dev"))

app.user(bodyParser.urlencoded())

app.get("/listprodutos", (req, res) => {
  knex("produto").select().then(ret => {
    res.send(ret)
  }).catch(err => {
    res.status(500).send(err)
    console.log(err)
  })
})
app.get("/addproduto", (req, res) => {
  knex("produto").insert(req.query, "produto").then(ret => {
      res.send(ret)
  }).catch(err => {
    res.status(500).send(err)
    console.log(err)
  })
})

knex.migrate.latest().then(_ =>
  app.listen(3000, _ =>
    console.log("server online!")))