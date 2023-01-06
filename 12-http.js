//HTTP module:

//Parte 1:
// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log(req);
//     res.write('Bem-vindo ao site!');
//     res.end();
// });

// server.listen(5000); 

//Parte 2:
//(dessa forma deu erro do segundo jeito dá certo)
// const http = require('http');
// const server = http.createServer((req, res) => {
//     if(req.url === '/') { //A / indica a Home Page
//         res.end('Welcome to our home page'); //o end resume os métodos write e end num só acredito*, por isso o texto vai aqui
//     }
//     if(req.url === '/about'){
//         res.end('Here is our short history');
//     }
//     res.end(`
//     <h1>Oops!</h1>
//     <p>We can't seem to find the page you are looking for</p>
//     <a href="/">back home</a>
//     `)
// });

// server.listen(5000);

//O jeito que deu certo:
const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to our Home Page');
    }else if(req.url === '/about') {
        res.end('This is our short history')
    }else {
        res.end(
            `<h1>Oops!!!</h1>
            <p>Is something Wrong here! Some type of error ocurred!</p>
            <a href='/'>Back home</a>
            `);
    } 
})

server.listen(5000);