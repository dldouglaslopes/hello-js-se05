const express = require("express");
const axios = require("axios");

const app = express();

const baseURL = "https://api.github.com/users";
const api = axios.create({ baseURL });

//jkchao

app.get("/seguidores/:id", (req, res) => {
    api.get("/" + `${req.params.id}` + "/followers").then(ret => {
        console.log(ret.data);
        res.send(ret.data);
    })
})

app.listen(3000)
console.log("server online!")

