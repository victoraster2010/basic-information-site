const http = require('http');
const fs = require('fs/promises')
const host = 'localhost';
const port = 8000;




const requestListener = async function (req, res) {
    res.setHeader("Content-Type", "text/html");
    switch (req.url) {
        case "/about":
          await fs.readFile(__dirname + "/about.html").then(contents => {
            res.writeHead(200);
            res.end(contents);
          })
            break
        case "/contact-me":
          await fs.readFile(__dirname + "/contact-me.html").then(contents => {
            res.writeHead(200);
            res.end(contents);
          })
            break
          case "/":
          await fs.readFile(__dirname + "/index.html").then(contents => {
            res.writeHead(200);
            res.end(contents)
          })
            break
          default:
          await fs.readFile(__dirname + "/404.html").then(contents => {
            res.writeHead(404);
            res.end(contents);
          })
    }
}

// fs.readFile(__dirname + "/index.html")
// .then(contents => {
//     res.setHeader("Content-Type", "text/html");
//     res.writeHead(200);
//     res.end(contents);
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});