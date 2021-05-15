var slideshow = document.getElementById('slideshow');
var slides = slideshow.getElementsByTagName('img');
var index = 0;

function nextSlide() {        
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}
function prevSlide() {        
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
}


var slideshowText = document.getElementById('slideshowText');
var slidesText = slideshowText.getElementsByTagName('div');
var indexText = 0;

function nextSlideText() {        
  slidesText[indexText].classList.remove('active');
  indexText = (indexText + 1) % slidesText.length;
  slidesText[indexText].classList.add('active');
}
function prevSlideText() {        
  slidesText[indexText].classList.remove('active');
  indexText = (indexText - 1 + slidesText.length) % slidesText.length;   slidesText[indexText].classList.add('active');
}

function menuToggle() {
  var nav = document.getElementById('navbar');
  nav.classList.toggle('active');
  
}



  
