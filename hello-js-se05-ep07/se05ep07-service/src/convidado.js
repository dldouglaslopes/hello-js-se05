const express = require("express")
const knex = require("./config").knex
const oncatch = require("./config").oncatch

const router = express.Router()

router.get("/list", (req,res) => 
  knex("convidado").select().then(ret => 
    res.send(ret)).catch(oncatch(res)))

router.post("/save", (req,res) => 
  knex("convidado").insert(req.body,"idconvidado").then(ret => 
    res.send(ret)).catch(oncatch(res)))

exports.router = router