let express = require('express')
let app = express()
let fs = require('fs')

function readFile(res, file){
    fs.readFile(file, function(err, html){
        res.write(html)
        res.end()
    })

}

// route of the page

app.get('/pagina', function(req, res){
    readFile(res, 'index.html')    
})

// iniciando o server
let server = app.listen(3000, function(){
    let host = server.address().address
    let port = server.address().port
    console.log('servidor iniciado em http://%s:%s', host, port)
})
