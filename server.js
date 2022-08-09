const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./db.json')
const middlewares = jsonServer.defaults({
    static: './build'
})
const path = require("path");

if (process.env.NODE_ENV === "production") {

    app.use(express.static("client/build"));

    app.get("*", (req, res) => {

    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));

    });

}

const port = process.env.PORT || 4000
server.use(middlewares)
// server.use(
//     jsonServer.rewriter({
//         '/api/*': '/$1',
//     })
// )

server.use(router)
server.listen(port, () => {
    console.log(`Server is running on ${port}`)
})