const express = require('express');
const app = express();


const hbs = require('hbs');
require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/parciales');

const puerto = process.env.PORT || 3000;

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'ferNando gArCia'
    })

    /* let persona = {
         nombre: "Fernando",
         apellido: "Garcia",
         edad: 27,
         url: req.url
     }
     res.send(persona);*/
});

app.get('/about', (req, res) => {

    res.render('about')
})

app.listen(puerto, () => console.log(`Escuchando peticiones del puerto ${ puerto }`));