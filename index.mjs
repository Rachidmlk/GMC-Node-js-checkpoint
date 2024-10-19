// 1- Creating a server
import http from 'http'
const server = http.createServer((req, res)=> {
res.write('<h1>Hello Node!!!!</h1>\n')
res.end()
})
server.listen(3000)
 //2- create a file
 import fs from 'node:fs/promises'
 try {
 await fs.writeFile('./welcome.txt', 'Hello Node')
}
catch(err) {
    console.log(err);
}

