const http = require('http')
const routes = require('./routes')

// function listener(req, res) {
    
// }

const server = http.createServer(routes.handler)

server.listen(3000, () => {
    console.log('Server running')
})