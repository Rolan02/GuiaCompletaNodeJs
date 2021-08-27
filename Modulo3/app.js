const http = require('http');
const fs =  require('fs');
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Ingrese el mensaje</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text"><button type="submit">Send</buttom></form></body>')
        res.write('</html>')
        return res.end();
    }

    if (url === '/message' && method === 'POST'){
        fs.writeFileSync('message.txt' , 'ROLANDO');
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    }
    //process.exit()   Terminaremos el proceso por que no hay mas peticiones que atender
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My primera pagina</title></head>')
    res.write('<body></h1>Hola mi primer Servidor en Node Js</h1></body>')
    res.write('</html>')
    res.end
});
server.listen(3000);