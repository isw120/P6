let data = {
  value : null,
  results: []
}


  async function getBestMovie() {

    data.value = fetch("http://localhost:8000/api/v1/titles/1508669")
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
    return value
  })
  .catch(function(err) {
    console.log("Une erreur est survenue")
  });

  data.value = await data.value.then(result => result);

  document.getElementById("bestMovieTitle").innerHTML = data.value.title;
  document.getElementById("bestMovieDescription").innerHTML = data.value.description;
  document.getElementById("bestMovieImg").src = data.value.image_url;
  document.getElementById("bestMovieId").innerHTML = data.value.id;

  getModalData(data.value)

}


  async function getMovieData(id) {

  data.value = fetch("http://localhost:8000/api/v1/titles/" + id)
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
    return value
  })
  .catch(function(err) {
    console.log("Une erreur est survenue")
  });

  data.value = await data.value.then(result => result);

  getModalData(data.value)

}


function getModalData(value) {

  document.getElementById("movieImg").src = value.image_url
  document.getElementById("movieTitle").innerHTML = "Titre : " + value.title
  document.getElementById("movieGender").innerHTML = "Genre : " + value.genres
  document.getElementById("movieReleaseDate").innerHTML = "Date de sortie : " + value.title
  document.getElementById("movieRated").innerHTML = "Rated : " + value.rated
  document.getElementById("movieScore").innerHTML = "Score Imdb : " + value.imdb_score
  document.getElementById("movieDirectors").innerHTML = "Réalisateur : " + value.directors
  document.getElementById("movieActors").innerHTML = "Liste des acteurs : " + value.actors
  document.getElementById("movieDuration").innerHTML = "Durée : " + value.duration + " minutes"
  document.getElementById("movieCountry").innerHTML = "Le pays d’origine : " + value.countries
  document.getElementById("movieGrossIncome").innerHTML = "Le résultat au Box Office : " + value.usa_gross_income
  document.getElementById("movieDescription").innerHTML = "Le résumé du film : " + value.description

}

 async function getBestMovies() {
    

   data.value = fetch("http://localhost:8000/api/v1/titles/?imdb_score_min=9.4")
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
    return value
  })
  .catch(function(err) {
    console.log("Une erreur est survenue")
  });

  data.value = await data.value.then(result => result);
  data.results = data.value.results
  if (data.value.next != null) {
    data.value = fetch(data.value.next)
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
    return value
  })
  .catch(function(err) {
    console.log("Une erreur est survenue")
  });

  data.value = await data.value.then(result => result);
  data.results.push(...data.value.results)
  }


  let div = document.getElementById('slider')
  let divs = document.getElementsByClassName("slide")

  for (let i = 0; i < divs.length; i++) {
      let img = document.createElement('img');
        img.src = data.results[i].image_url;
         img.id = data.results[i].id
  img.addEventListener("click", function(e) { getMovieData(e.target.id)
    let modal = document.getElementById("myModal")
  modal.style.display = "block"; }, false);
  divs[i].appendChild(img);
  }

  

}

let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
    let id = document.getElementById("bestMovieId").innerHTML;
    getMovieData(id)
}


span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

window.onload = function() {
  getBestMovie()
  getBestMovies()
};
