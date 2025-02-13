document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, {
    fullWidth: true,
    indicators: true
  });
}); //iniciando carrossel

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
}); //iniciando menu lateral mobile

const instance = M.Carousel.init({
    fullWidth: true
});



// CODIGO PROPRIO: FAZENDO SISTEMA DE AVALIAÇÃO COM ESTRELAS
document.addEventListener('DOMContentLoaded', function() {
  const stars = document.querySelectorAll('.star-rating .star');
  const ratingInput = document.getElementById('rating');

  stars.forEach(star => {
    star.addEventListener('mousemove', function(event) {
      const rect = star.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const width = rect.width;
      const half = width / 2;
      const value = parseFloat(star.getAttribute('data-value'));

      if (x <= half) {
        star.textContent = 'star_half';
        ratingInput.value = value - 0.5;
      } else {
        star.textContent = 'star';
        ratingInput.value = value;
      }
      updateStars(ratingInput.value);
    });

    star.addEventListener('click', function() {
      const rating = ratingInput.value;
      updateStars(rating);
    });

    star.addEventListener('mouseleave', function() {
      const rating = ratingInput.value;
      updateStars(rating);
    });
  });

  function updateStars(rating) {
    stars.forEach(star => {
      const value = parseFloat(star.getAttribute('data-value'));
      if (value <= rating) {
        star.textContent = 'star';
      } else if (value - 0.5 === parseFloat(rating)) {
        star.textContent = 'star_half';
      } else {
        star.textContent = 'star_border';
      }
    });
  }
});