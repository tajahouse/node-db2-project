const server = require("./api/server.js");

const PORT = process.env.PORT || 4400

server.listen(PORT, ()=>{
    console.log(`Server listening on port: ${PORT}`)
})