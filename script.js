const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

function navToggle() {
  btn.classList.toggle('open')
  nav.classList.toggle('hidden')
  document.body.classList.toggle('no-scroll')
}

btn.addEventListener('click', navToggle)

const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlide].classList.add('on')
}

function nextSlider() {
  hideSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)

/*Diminuir fontes*/
function increaseFontSize() {
  // Aumenta o tamanho da fonte em 2 pixels
  changeFontSize(2);
}

function decreaseFontSize() {
  // Diminui o tamanho da fonte em 2 pixels
  changeFontSize(-2);
}

function changeFontSize(delta) {
  var body = document.body;
  var currentSize = parseInt(window.getComputedStyle(body, null).getPropertyValue('font-size'));
  var newSize = currentSize + delta;
  body.style.fontSize = newSize + 'px';
}