exports.knex = require("knex")({
  client: 'sqlite3',
  connection: {
    filename: "./jogador.db"
  }
})