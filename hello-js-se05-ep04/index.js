const knex = require("knex")({
    client: "sqlite3",
    connection: {
        filename: "./jogador.db"
    }
})

knex("jogador").select().then(ret => {
    console.log(ret);
    process.exit(0);
})