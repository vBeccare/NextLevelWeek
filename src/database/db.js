// importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar o objeto q fará operações no de banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
// utilizar o objeto de bd para as operações
// db.serialize(() => {
    //criar uma tabela
  //   db.run(`
    //       CREATE TABLE IF NOT EXISTS places (
            //          id INTEGER PRIMARY KEY AUTOINCREMENT,
            //          nome TEXT,
            //           imagem TEXT,
            //          endereco TEXT,
            //           endereco2 TEXT,
            //            estado TEXT,
            //           cidade TEXT,
            //            itens TEXT
            // 
            //       );    
        //  `)
    //inserir dados na tabela
  //   const query = `
   //      INSERT INTO places (
   //          nome,
   //          imagem,
  //           endereco,
  //           endereco2,
  //           estado,
  //           cidade,
  //           itens
  //       ) VALUES (?,?,?,?,?,?,?); 
            
  //   `

  //   const values = [ "Papersider",
  //   "https://images.unsplash.com/photo-1509956563346-93a1179cea68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  //   "Guilherme Gemballa, Jardim America",
  //   "Numero 260",
  //   "Santa Catarina",
  //   "Rio do Sul",
  //   "Papéis e papelão"
   //  ]

 //    function afterInsertData(err){
  //       if(err) {
  //           return console.log(err)
  //        }
   //           console.log("Cadastrado com sucesso")
  //            // fazer sem arrow quando possui this
  //            console.log(this)
 //    }

  //    db.run(query, values, afterInsertData)

    //consultar os dados
 //    db.all(`SELECT nome FROM places`, function(err, rows) {
 //        if(err) {
  //           return console.log(err)
  //        }
  //        console.log("Aqui estão seus registros: ")
  //        console.log(rows)
  //   })

    //Deletar dados
      //  db.run(`DELETE FROM places WHERE id = ?`, [1], function(err){
      //       if(err) {
      //           return console.log(err)
      //       }
     //        console.log("Registro deletado com sucesso")
     //    })

 // })
