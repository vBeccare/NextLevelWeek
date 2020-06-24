const express = require("express")
const server = express()

//pegar bd
const db = require("./database/db")

//configurar pasta publica
server.use(express.static("public"))


//habilitar o uso do req.body na aplicaca
server.use(express.urlencoded ({extended: true}))

//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//configurar caminhos da minha aplicação
//pagina inicial
//req : pedido
//res : resposta
server.get("/", (req, res) => {
    //sem nunjucks
    //res.send(__dirname + "/views/index.html")
    //com nunjucks
  return  res.render("index.html", {title: "Um titulo"})
})

server.get("/create-point", (req, res) => {
  // Query string da url
  //  req.query



  return  res.render("create-point.html")
})

server.post("/savepoint",(req, res) => {


  //inserir dados no bd

  const query = `
        INSERT INTO places (
            nome,
            imagem,
            endereco,
            endereco2,
            estado,
            cidade,
            itens
        ) VALUES (?,?,?,?,?,?,?); 
           
    `

    const values = [ 
      req.body.name,
      req.body.image,
      req.body.address,
      req.body.address2,
      req.body.state,
      req.body.city,
      req.body.items,
    ]

    function afterInsertData(err){
        if(err) {
             console.log(err)
             return res.send("Erro no cadastro")
         }
             console.log("Cadastrado com sucesso")
             // fazer sem arrow quando possui this
             console.log(this)

             return res.render("create-point.html", {saved:true})
    }

     db.run(query, values, afterInsertData)

  
  
 

})


server.get("/search", (req, res) => {
    const search = req.query.search

    if (search == "") {
      return res.render("search-results.html", { total: 0})
    }


  //pegar os dados do bd
  
  db.all(`SELECT * FROM places WHERE cidade LIKE '%${search}%'`, function(err, rows) {
      if(err) {
          return console.log(err)
      }

      // console.log("Aqui estão seus registros: ")
      // console.log(rows)

      const total = rows.length
        //mostrar a pagina com os dados do bd
       return res.render("search-results.html", {places : rows, total: total})
   })



  
})

//ligar o servidor
server.listen(3000)