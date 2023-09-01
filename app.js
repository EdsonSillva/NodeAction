const express = require('express');
const bodyparser = require('body-parser');
const ejs = require('ejs');


const app = express();

app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());



// Rota principal
app.get('/', (req, res) => {
    return res.send('<h1>Ola mundo via express</h1>').end();
});

//Rota secundaria
app.get('/edson', (req, res) => {
    return res.send('<h1>Ola Edson via express</h1>').end();
});


//Rota jason
app.get('/json', (req, res) => {
    return res.json({  msg: 'Ola Edson via express'});
});


//Tamplate usando ejs
app.get('/template', (req, res) => {
    return res.render('index', {
        mymsg: "Essa é uma mensagem de uma variavel",
        idade: 38
    });
});

/* primeiro exemplo
app.post('/send', (req, res) => {
    console.log(req.body);
    return res.json({ body: req.body });
});
*/

app.post('/send', require('./services/service'));


app.listen(8081, () => {
    console.log('Servidor iniciado via express');
});

