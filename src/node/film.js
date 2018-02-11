const express = require('express');
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.json()) //parse JSON body
app.use(bodyParser.urlencoded()) //parse x-www-form-urlencoded body
var liste=" ";
var films =["Titanic","Platoon","Birds"];
function init(){

films.forEach(function(element){
  liste += element+", ";
})
}

app.use('/',express.static('../static'));
app.get('/foo/api/movies/all',
(req,res)=>res.send("films :"+ liste));

app.get('/foo/api/movies/:id',
(req,res)=>res.send("film : " +films[parseInt(req.params.id)]));

app.post('/foo/api/movies/:id',function (req,res){
films[parseInt(req.params.id)]=req.body.film;
res.send('Titre à jour : '+films[parseInt(req.params.id)]);
});

app.post('/foo/api/movies',
function(req,res){
  films.push(req.body.film);
  init();
   res.redirect('/foo/api/movies/all');
});

app.listen(3000,()=> console.log('listFilm app listening on port 3000!'));
