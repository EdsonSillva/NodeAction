/**
 * Servidor web 002
 * 
 */

 const http = require('http');


const handler = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});

    res.write('<!DOCTYPE "html">');
    res.write('<html>');
    res.write('<head> <title>Ola mundo com (handler)</title> </head>');
    res.write('<body> <h1>Ola mundo</h1> </body>');
    res.write('</html>');
    res.end();

};

//Inicia o servidor e coloca para esc utar a porta 8081
 const server =  http.createServer(handler);
 
 server.on('request', (req, res) => {
    console.log('O servidor recebeu uma requisicao');
 });

 server.listen(8081);

    

