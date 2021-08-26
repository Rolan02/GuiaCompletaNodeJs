const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url,req.method, req.headers);
    //process.exit()   Terminaremos el proceso por que no hay mas peticiones que atender
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My primera pagina</title></head>')
    res.write('<body></h1>Hola mi primer Servidor en Node Js</h1></body>')
    res.write('</html>')
    res.end

});
server.listen(3000);