const knex = require("knex")({
    client: 'sqlite3',
    connection: {
      filename: "./esquema-inicial.db"
    }
  })
  
let value = process.argv[3];
let operation = process.argv[2];

if(operation == "insert"){
    var contatoArr = value.split(",");
    let nome = contatoArr[0];
    let telefone = contatoArr[1];
    let data = {nome, telefone};
    knex("contato").insert(data,"idcontato").then(ret => {
        console.log(ret);
        process.exit(0);
    });
}
else if(operation == "update"){
    var contatoArr = value.split(",");
    let idcontato = contatoArr[0];
    let nome = contatoArr[1];
    let telefone = contatoArr[2];
    let data = {nome, telefone};
    knex("contato").update(data).where({idcontato}).then(ret => {
        console.log(ret);
        process.exit(0);
    })
}
else if(operation == "delete"){
    const idcontato = value;
    knex("contato").del().where({idcontato}).then(ret => {
        console.log(ret);
        process.exit(0);
    })
}
else{
    knex("contato").select().then(ret => {
        console.log(ret)
        process.exit(0) // finalizar execução do script
      }) 
}