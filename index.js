const Http = require('http')
const fs = require('fs')



const onRequest1 = (request, response) => {
    response.writeHead(200,{"Content-Type": "text/html"})
    fs.readFile("./index.html",null, (error,data) => {
        if (error) {
            response.writeHead(404)
            response.write("file not found")
        }else {
            response.write(data)
        }
        response.end()
    })
}


const dataJson = {
    statusCode: 200,
    name: "Muhammad Hafidh",
    domisili: "Tangerang Selatan"
}

 const onRequest2 = (request, response) => {
    response.writeHead(200,{"Content-Type": "application.json"})
    response.end(JSON.stringify(dataJson))
}

Http.createServer(onRequest1).listen(5001)