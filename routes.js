const fs = require('fs')

function requestHandler(req, res) {
    const url = req.url
    const method = req.method

    if(url === '/') {
        res.write(`
            <html>
                <body>
                    <form method="POST" action="/message">
                        <input type="text">
                        <button>Send</button>
                    </form>
                </body>
            </html>
        `)
    }
    if(url === '/message' && method === 'POST') {
        const body = []
        req.on('data', (chunk) => {
            body.push(chunk)
        })
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split('=')[1]
            fs.writeFile('message.txt', message, (err) => {
                if (err) {
                    console.log(err)
                    return
                }
                res.statusCode = 302
                res.setHeader('Location', '/')
            })
        })
    }
    return res.end()
}

export default {
    handler: requestHandler
}