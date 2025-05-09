let Movies;
function init(){
  $.ajaxSetup({async: false});

  let link = "https://3cf83064-db02-4b8b-9a2e-fd8acf17c60f-00-1qf8v83xwc8xb.janeway.replit.dev";
  let route= "/movie";
  let route2= "/directors";
  moviedb = $.getJSON(link+route).responseJSON;
  directordb = $.getJSON(link+route2).responseJSON;
generateCards(moviedb);

}
function init2(){
  $.ajaxSetup({async: false});

  let link = "https://3cf83064-db02-4b8b-9a2e-fd8acf17c60f-00-1qf8v83xwc8xb.janeway.replit.dev";
  let route= "/movie";
  let route2= "/directors";
  moviedb = $.getJSON(link+route).responseJSON;
  directordb = $.getJSON(link+route2).responseJSON;
generateCards2(directordb);

}

function generateCards(Movies){

  let output = document.getElementById( "centerpanel" );
  let build ="";


  for(let i=0; i<Movies.length; i++){
    let Movie = Movies[i]
    build += `<div class="card">`
    build += `<div class="flip-card">`
    build += `<div class="flip-card-inner">`
    build += `<div class="flip-card-front">`
    build += `<img src="${Movie.MovieCover}">`;
    build += `<div> Movie Name : ${Movie.MovieName}</div>`;
    build += `<a href= "${Movie.MovieLink}" target="_blank" class="link-style">About Movie</a>`;
    build += `</div>`
    build += `<div class="flip-card-back">`
    build += `<h3> Movie ID : ${Movie.MovieID}</h3>`;
    build += `<div> Director Name : ${Movie.Director}</div>`;
    build += `<div> Genre : ${Movie.Genre}</div>`;
    build += `<div> Rating : ${Movie.Rating}</div>`;
    build += `<div> Total Gross : ${Movie.TotalGross}</div>`;
    build += `</div>`
    build += `</div>`
    build += `</div>`
    build += `</div>`

  }

  output.innerHTML = build;

}

function generateCards2(Movies){

let output = document.getElementById( "centerpanel" );
let build ="";


for(let i=0; i<Movies.length; i++){
  let Movie = Movies[i]
  build += `<div class="card">`
  build += `<div class="flip-card">`
  build += `<div class="flip-card-inner">`
  build += `<div class="flip-card-front">`
  build += `<img src="${Movie.DirectorPicture}">`;
  build += `<div> Director Name : ${Movie.Director}</div>`;
  build += `<a href= "${Movie.DirectorLink}" target="_blank" class="link-style">About Director</a>`;
  build += `</div>`
  build += `<div class="flip-card-back">`
  build += `<h3> Director ID : ${Movie.DirectorId}</h3>`;
  build += `</div>`
  build += `</div>`
  build += `</div>`
  build += `</div>`

}

output.innerHTML = build;
}

function filter(){
  let genre = document.getElementById("genre").value;
  console.log(genre); 
  let movies =[];

  for(let i=0; i<moviedb.length;i++){
    let movie = moviedb[i] 
    if( movie.Genre == genre ) {
          movies.push(movie);
       }
  }
  console.log(`number found ${movies.length}`)
  generateCards(movies);

}
function filter2(){
  let director = document.getElementById("director").value;
  console.log(director); 
  let movies =[];

  for(let i=0; i<moviedb.length;i++){
    let movie = moviedb[i] 
    if( movie.Director == director ) {
          movies.push(movie);
       }
  }
  console.log(`number found ${movies.length}`)
  generateCards(movies);

}
function filter4(){
  let director = document.getElementById("director").value;
  console.log(director); 
  let directors =[];

  for(let i=0; i<directordb.length;i++){
    let directorss = directordb[i] 
    if( directorss.Director == director ) {
          directors.push(directorss);
       }
  }
  console.log(`number found ${directors.length}`)
  generateCards2(directors);

}
function filter3(){
  let name = document.getElementById("name").value;
  console.log(director); 
  let movies =[];

  for(let i=0; i<moviedb.length;i++){
    let movie = moviedb[i] 
    if( movie.MovieName == name ) {
          movies.push(movie);
       }
  }
  console.log(`number found ${movies.length}`)
  generateCards(movies);

}
function multifilter(filter1,filter2){
  let genre = document.getElementById(filter1).value;
  let director = document.getElementById(filter2).value;
  console.log(director); 
  console.log(genre); 
  let movies =[];

  for(let i=0; i<moviedb.length;i++){
    let movie = moviedb[i] 
    if( (movie.Genre == genre) && (movie.Director = director)) {
          movies.push(movie);
       }
  }
  console.log(`number found ${movies.length}`)
  generateCards(movies);

}