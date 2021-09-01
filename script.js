let data = {
  bestMovieData : null,
  bestAnimationMovieData: null,
  bestAdventureMovieData: null,
  bestScifiMovieData: null,
  bestMovies: [],
  bestAnimationMovies: [],
  bestAdventureMovies: [],
  bestScifiMovies: [],
}


  async function getBestMovie() {

    data.bestMovieData = fetch("http://localhost:8000/api/v1/titles/?imdb_score_min=9.4")
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

  data.bestMovieData = await data.bestMovieData.then(result => result);

  document.getElementById("bestMovieTitle").innerHTML = data.bestMovieData.results[0].title;
  let img = document.createElement('img');
  img.src = data.bestMovieData.results[0].image_url;
  img.id = "bestMovieImg"
  document.getElementById("divImg").appendChild(img);
  document.getElementById("bestMovieId").innerHTML = data.bestMovieData.results[0].id;

  getMovieData(data.bestMovieData.results[0].id, true)

}


  async function getMovieData(id, option) {

  data.bestMovieData = fetch("http://localhost:8000/api/v1/titles/" + id)
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

  data.bestMovieData = await data.bestMovieData.then(result => result);


  if (option == true) {
    document.getElementById("bestMovieDescription").innerHTML = data.bestMovieData.description;
  }

  getModalData(data.bestMovieData)

}


function getModalData(value) {

  document.getElementById("ImageBloc").innerHTML = ""
  let img = document.createElement('img');
  img.src = value.image_url;
  img.id = "movieImg"
  document.getElementById("ImageBloc").appendChild(img);
  document.getElementById("movieTitle").innerHTML = "Titre : " + value.title
  document.getElementById("movieGender").innerHTML = "Genre : " + value.genres
  document.getElementById("movieReleaseDate").innerHTML = "Date de sortie : " + value.year
  document.getElementById("movieRated").innerHTML = "Rated : " + value.rated
  document.getElementById("movieScore").innerHTML = "Score Imdb : " + value.imdb_score
  document.getElementById("movieDirectors").innerHTML = "Réalisateur : " + value.directors
  document.getElementById("movieActors").innerHTML = "Liste des acteurs : " + value.actors
  document.getElementById("movieDuration").innerHTML = "Durée : " + value.duration + " minutes"
  document.getElementById("movieCountry").innerHTML = "Le pays d’origine : " + value.countries
  if (value.usa_gross_income != null) {
    document.getElementById("movieGrossIncome").innerHTML = "Le résultat au Box Office : " + value.usa_gross_income + " USD"
  } else {
    document.getElementById("movieGrossIncome").innerHTML = "Le résultat au Box Office : aucun"
  }
  
  document.getElementById("movieDescription").innerHTML = "Le résumé du film : " + value.description

}

 async function getBestMovies() {
    

   data.bestMovieData = fetch("http://localhost:8000/api/v1/titles/?imdb_score_min=9.4")
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

  data.bestMovieData = await data.bestMovieData.then(result => result);
  data.bestMovies = data.bestMovieData.results
  if (data.bestMovieData.next != null) {
    data.bestMovieData = fetch(data.bestMovieData.next)
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

  data.bestMovieData = await data.bestMovieData.then(result => result);
  data.bestMovies.push(...data.bestMovieData.results)
  }


  let div = document.getElementById('slider')
  let divs = document.getElementsByClassName("slide")

  for (let i = 0; i < divs.length; i++) {
      let img = document.createElement('img');
        img.src = data.bestMovies[i].image_url;
         img.id = data.bestMovies[i].id
  img.addEventListener("click", function(e) { getMovieData(e.target.id, false)
    let modal = document.getElementById("myModal")
  modal.style.display = "block"; }, false);
  divs[i].appendChild(img);
  }

}

async function getBestAnimationMovies() {
    

   data.bestAnimationMovieData = fetch("http://localhost:8000/api/v1/titles/?imdb_score_min=8.6&genre=animation")
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

  data.bestAnimationMovieData = await data.bestAnimationMovieData.then(result => result);
  data.bestAnimationMovies = data.bestAnimationMovieData.results
  if (data.bestAnimationMovieData.next != null) {
    data.bestAnimationMovieData = fetch(data.bestAnimationMovieData.next)
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

  data.bestAnimationMovieData = await data.bestAnimationMovieData.then(result => result);
  data.bestAnimationMovies.push(...data.bestAnimationMovieData.results)
  }


  let div = document.getElementById('second-slider')
  let divs = document.getElementsByClassName("second-slide")

  for (let i = 0; i < divs.length; i++) {
      let img = document.createElement('img');
        img.src = data.bestAnimationMovies[i].image_url;
         img.id = data.bestAnimationMovies[i].id
  img.addEventListener("click", function(e) { getMovieData(e.target.id, false)
    let modal = document.getElementById("myModal")
  modal.style.display = "block"; }, false);
  divs[i].appendChild(img);
  }

}


async function getBestAdventureMovies() {
    

   data.bestAdventureMovieData = fetch("http://localhost:8000/api/v1/titles/?imdb_score_min=8.8&genre=Adventure")
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

  data.bestAdventureMovieData = await data.bestAdventureMovieData.then(result => result);
  data.bestAdventureMovies = data.bestAdventureMovieData.results
  if (data.bestAdventureMovieData.next != null) {
    data.bestAdventureMovieData = fetch(data.bestAdventureMovieData.next)
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

  data.bestAdventureMovieData = await data.bestAdventureMovieData.then(result => result);
  data.bestAdventureMovies.push(...data.bestAdventureMovieData.results)
  }


  let div = document.getElementById('third-slider')
  let divs = document.getElementsByClassName("third-slide")

  for (let i = 0; i < divs.length; i++) {
      let img = document.createElement('img');
        img.src = data.bestAdventureMovies[i].image_url;
         img.id = data.bestAdventureMovies[i].id
  img.addEventListener("click", function(e) { getMovieData(e.target.id, false)
    let modal = document.getElementById("myModal")
  modal.style.display = "block"; }, false);
  divs[i].appendChild(img);
  }

}


async function getBestScifiMovies() {
    

   data.bestScifiMovieData = fetch("http://localhost:8000/api/v1/titles/?imdb_score_min=8.5&genre=Sci-Fi")
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

  data.bestScifiMovieData = await data.bestScifiMovieData.then(result => result);
  data.bestScifiMovies = data.bestScifiMovieData.results
  if (data.bestScifiMovieData.next != null) {
    data.bestScifiMovieData = fetch(data.bestScifiMovieData.next)
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

  data.bestScifiMovieData = await data.bestScifiMovieData.then(result => result);
  data.bestScifiMovies.push(...data.bestScifiMovieData.results)
  }


  let div = document.getElementById('fourth-slider')
  let divs = document.getElementsByClassName("fourth-slide")

  for (let i = 0; i < divs.length; i++) {
      let img = document.createElement('img');
        img.src = data.bestScifiMovies[i].image_url;
         img.id = data.bestScifiMovies[i].id
  img.addEventListener("click", function(e) { getMovieData(e.target.id, false)
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
    getMovieData(id, false)
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
  getBestAnimationMovies()
  getBestAdventureMovies()
  getBestScifiMovies()
};
