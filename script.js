let data = {
  value : null,
  results: []
}



fetch("http://localhost:8000/api/v1/titles/1508669")
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
    getBestMovie(value)
  })
  .catch(function(err) {
    console.log("Une erreur est survenue")
  });



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

  let value = data.value

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



  function getBestMovie(value) {

  document.getElementById("bestMovieTitle").innerHTML = value.title;
  document.getElementById("bestMovieDescription").innerHTML = value.description;
  document.getElementById("bestMovieImg").src = value.image_url;

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
  console.log(data.results)
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




let Carousel = function (frameSelector, sliderSelector, slidesSelector, btnLeftSelector, btnRightSelector) {
    let leftPosition = 0;
    let frame = document.querySelector(frameSelector);
    let slides = document.querySelectorAll(slidesSelector);
    let slidesNumber = slides.length;
    let leftButton = document.querySelector(btnLeftSelector);
    let rightButton = document.querySelector(btnRightSelector);
    let slider = document.querySelector(sliderSelector);

    frame.classList.add('frame');
    slider.classList.add('slider');
    leftButton.addEventListener("click", function() {
        carousel.previous();
    });

    rightButton.addEventListener("click", function() {
        carousel.next();
    });
    let moveSlide = function (value) {
        leftPosition += value*250;
        slider.style.left = leftPosition + 'px';
    };

    return {
        next: function() {
            if(leftPosition > (slidesNumber-1)*-250)
            {
                moveSlide(-1);
            } else {
                leftPosition = 0;
                slider.style.left = leftPosition + 'px';
            }
        },
        previous: function() {
            if(leftPosition !== 0) {
                 moveSlide(1);
            } else {
                leftPosition = (slidesNumber-1)*-250;
                slider.style.left = leftPosition + 'px';
            }
        }
    };
};


let SecondCarousel = function (frameSelector, sliderSelector, slidesSelector, btnLeftSelector, btnRightSelector) {
    let leftPosition = 0;
    let frame = document.querySelector(frameSelector);
    let slides = document.querySelectorAll(slidesSelector);
    let slidesNumber = slides.length;
    let leftButton = document.querySelector(btnLeftSelector);
    let rightButton = document.querySelector(btnRightSelector);
    let slider = document.querySelector(sliderSelector);

    frame.classList.add('second-frame');
    slider.classList.add('second-slider');
    leftButton.addEventListener("click", function() {
        secondCarousel.previous();
    });

    rightButton.addEventListener("click", function() {
        secondCarousel.next();
    });
    var moveSlide = function (value) {
        leftPosition += value*250;
        slider.style.left = leftPosition + 'px';
    };

    return {
        next: function() {
            if(leftPosition > (slidesNumber-1)*-250)
            {
                moveSlide(-1);
            } else {
                leftPosition = 0;
                slider.style.left = leftPosition + 'px';
            }
        },
        previous: function() {
            if(leftPosition !== 0) {
                 moveSlide(1);
            } else {
                leftPosition = (slidesNumber-1)*-250;
                slider.style.left = leftPosition + 'px';
            }
        }
    };
};

 
 
let ThirdCarousel = function (frameSelector, sliderSelector, slidesSelector, btnLeftSelector, btnRightSelector) {
    let leftPosition = 0;
    let frame = document.querySelector(frameSelector);
    let slides = document.querySelectorAll(slidesSelector);
    let slidesNumber = slides.length;
    let leftButton = document.querySelector(btnLeftSelector);
    let rightButton = document.querySelector(btnRightSelector);
    let slider = document.querySelector(sliderSelector);

    frame.classList.add('third-frame');
    slider.classList.add('third-slider');
    leftButton.addEventListener("click", function() {
        thirdCarousel.previous();
    });

    rightButton.addEventListener("click", function() {
        thirdCarousel.next();
    });
    let moveSlide = function (value) {
        leftPosition += value*250;
        slider.style.left = leftPosition + 'px';
    };

    return {
        next: function() {
            if(leftPosition > (slidesNumber-1)*-250)
            {
                moveSlide(-1);
            } else {
                leftPosition = 0;
                slider.style.left = leftPosition + 'px';
            }
        },
        previous: function() {
            if(leftPosition !== 0) {
                 moveSlide(1);
            } else {
                leftPosition = (slidesNumber-1)*-250;
                slider.style.left = leftPosition + 'px';
            }
        }
    };
};


let FourthCarousel = function (frameSelector, sliderSelector, slidesSelector, btnLeftSelector, btnRightSelector) {
    let leftPosition = 0;
    let frame = document.querySelector(frameSelector);
    let slides = document.querySelectorAll(slidesSelector);
    let slidesNumber = slides.length;
    let leftButton = document.querySelector(btnLeftSelector);
    let rightButton = document.querySelector(btnRightSelector);
    let slider = document.querySelector(sliderSelector);

    frame.classList.add('fourth-frame');
    slider.classList.add('fourth-slider');
    leftButton.addEventListener("click", function() {
        fourthCarousel.previous();
    });

    rightButton.addEventListener("click", function() {
        fourthCarousel.next();
    });
    let moveSlide = function (value) {
        leftPosition += value*250;
        slider.style.left = leftPosition + 'px';
    };

    return {
        next: function() {
            if(leftPosition > (slidesNumber-1)*-250)
            {
                moveSlide(-1);
            } else {
                leftPosition = 0;
                slider.style.left = leftPosition + 'px';
            }
        },
        previous: function() {
            if(leftPosition !== 0) {
                 moveSlide(1);
            } else {
                leftPosition = (slidesNumber-1)*-250;
                slider.style.left = leftPosition + 'px';
            }
        }
    };
};


let carousel = new Carousel('#frame', '#slider', '#slider .slide', '.arrowLeft', '.arrowRight');

let secondCarousel = new SecondCarousel('#second-frame', '#second-slider', '#second-slider .second-slide', '.second-arrowLeft', '.second-arrowRight');

let thirdCarousel = new ThirdCarousel('#third-frame', '#third-slider', '#third-slider .third-slide', '.third-arrowLeft', '.third-arrowRight');

let fourthCarousel = new FourthCarousel('#fourth-frame', '#fourth-slider', '#fourth-slider .fourth-slide', '.fourth-arrowLeft', '.fourth-arrowRight');


let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";

    fetch("http://localhost:8000/api/v1/titles/1508669")
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
    getBestMovie(value)
  })
  .catch(function(err) {
    console.log("Une erreur est survenue")
  });
}


span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


getBestMovies()
