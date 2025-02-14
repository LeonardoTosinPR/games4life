document.addEventListener('DOMContentLoaded', function() {
  // Verificar se o usuário está logado
  function checkLoginStatus() {
    const userData = localStorage.getItem('userData');
    const userAvatar = document.querySelector('.user-avatar');
    const loginLink = document.querySelector('.login-link');

    if (!userData) {
      alert('Você precisa estar logado para acessar esta página.');
      window.location.href = './login.html';
    } else {
      userAvatar.style.display = 'block';
      loginLink.style.display = 'none';
    }
  }

  checkLoginStatus();

  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, {
    fullWidth: true,
    indicators: true
  });
}); //iniciando carrossel


const instance = M.Carousel.init({
  fullWidth: true
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
}); //iniciando menu lateral mobile


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