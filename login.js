document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);

  // Verificar se o usuário está logado
  function checkLoginStatus() {
    const userData = localStorage.getItem('userData');
    const userAvatar = document.querySelector('.user-avatar');
    const loginLink = document.querySelector('.login-link');

    if (userData) {
      userAvatar.style.display = 'block';
      loginLink.style.display = 'none';
    } else {
      userAvatar.style.display = 'none';
      loginLink.style.display = 'block';
    }
  }

  checkLoginStatus();
}); //iniciando menu lateral mobile

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (storedUserData && storedUserData.email === email && storedUserData.password === password) {
      // Exibir animação de sucesso
      $('body').append('<div id="success-message" style="display:none;">Login bem-sucedido!</div>');
      $('#success-message').css({
        'position': 'fixed',
        'top': '50%',
        'left': '50%',
        'transform': 'translate(-50%, -50%)',
        'padding': '20px',
        'background-color': '#4caf50',
        'color': 'white',
        'font-size': '20px',
        'border-radius': '5px',
        'z-index': '1000'
      }).fadeIn(500).delay(2000).fadeOut(500, function() {
        $(this).remove();
        window.location.href = './jogo.html';
      });
    } else {
      alert('Email ou senha incorretos.');
    }
  });
});
