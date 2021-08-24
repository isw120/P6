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
        leftPosition += value*15.625;
        slider.style.left = leftPosition + 'em';
    };

    return {
        next: function() {
            if(leftPosition > (slidesNumber-1)*-15.625)
            {
                moveSlide(-1);
            } else {
                leftPosition = 0;
                slider.style.left = leftPosition + 'em';
            }
        },
        previous: function() {
            if(leftPosition !== 0) {
                 moveSlide(1);
            } else {
                leftPosition = (slidesNumber-1)*-15.625;
                slider.style.left = leftPosition + 'em';
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
        leftPosition += value*15.625;
        slider.style.left = leftPosition + 'em';
    };

    return {
        next: function() {
            if(leftPosition > (slidesNumber-1)*-15.625)
            {
                moveSlide(-1);
            } else {
                leftPosition = 0;
                slider.style.left = leftPosition + 'em';
            }
        },
        previous: function() {
            if(leftPosition !== 0) {
                 moveSlide(1);
            } else {
                leftPosition = (slidesNumber-1)*-15.625;
                slider.style.left = leftPosition + 'em';
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
        leftPosition += value*15.625;
        slider.style.left = leftPosition + 'em';
    };

    return {
        next: function() {
            if(leftPosition > (slidesNumber-1)*-15.625)
            {
                moveSlide(-1);
            } else {
                leftPosition = 0;
                slider.style.left = leftPosition + 'em';
            }
        },
        previous: function() {
            if(leftPosition !== 0) {
                 moveSlide(1);
            } else {
                leftPosition = (slidesNumber-1)*-15.625;
                slider.style.left = leftPosition + 'em';
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
        leftPosition += value*15.625;
        slider.style.left = leftPosition + 'em';
    };

    return {
        next: function() {
            if(leftPosition > (slidesNumber-1)*-15.625)
            {
                moveSlide(-1);
            } else {
                leftPosition = 0;
                slider.style.left = leftPosition + 'em';
            }
        },
        previous: function() {
            if(leftPosition !== 0) {
                 moveSlide(1);
            } else {
                leftPosition = (slidesNumber-1)*-15.625;
                slider.style.left = leftPosition + 'em';
            }
        }
    };
};

let carousel = new Carousel('#frame', '#slider', '#slider .slide', '.arrowLeft', '.arrowRight');

let secondCarousel = new SecondCarousel('#second-frame', '#second-slider', '#second-slider .second-slide', '.second-arrowLeft', '.second-arrowRight');

let thirdCarousel = new ThirdCarousel('#third-frame', '#third-slider', '#third-slider .third-slide', '.third-arrowLeft', '.third-arrowRight');

let fourthCarousel = new FourthCarousel('#fourth-frame', '#fourth-slider', '#fourth-slider .fourth-slide', '.fourth-arrowLeft', '.fourth-arrowRight');