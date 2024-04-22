window.addEventListener('scroll', function () {
  var box = document.querySelector('.home-container');
  var scrollPosition = window.scrollY + window.innerHeight;

  if (scrollPosition > 1100) {
    box.style.opacity = '0';
    box.style.transition = '0.8s';
  } else {
    box.style.opacity = '1';
  }
});
window.addEventListener('scroll', function () {
  var box = document.querySelector('.about-content');
  var h2 = document.getElementById('about-h2');
  var scrollPosition = window.scrollY + window.innerHeight;

  if (scrollPosition > 1400) {
    h2.style.opacity = '1';
    box.style.opacity = '1';
    box.style.transition = '1s';
    h2.style.transition = '0.8s';
  } else {
    box.style.opacity = '0';
    h2.style.opacity = '0';
  }
});

window.addEventListener('scroll', function () {
  var box = document.querySelector('.icons');
  var scrollPosition = window.scrollY + window.innerHeight;

  if (scrollPosition > 2900) {
    box.style.opacity = '1';
    box.style.transition = '1s';
  } else {
    box.style.opacity = '0';
  }
});

function clickAbout() {
  var target = document.getElementById('about');
  target.scrollIntoView({ behavior: 'smooth' });
}
