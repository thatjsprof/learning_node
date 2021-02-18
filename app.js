const fs = require('fs')
import routes from './routes'

// function listener(req, res) {
    
// }

const server = http.createServer(routes.handler)

server.listen(3000)