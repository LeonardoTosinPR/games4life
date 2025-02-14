document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);

  // Verificar se o usuário está logado
  function checkLoginStatus() {
    var userData = localStorage.getItem('userData');
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
});

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = emailInput.value;
    var password = passwordInput.value;

    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (storedUserData && storedUserData.email === email && storedUserData.password === password) {
      // Exibir animação de sucesso
      const successMessage = document.createElement('div');
      successMessage.id = 'success-message';
      successMessage.style.display = 'none';
      successMessage.textContent = 'Login bem-sucedido!';
      form.appendChild(successMessage);
      Object.assign(successMessage.style, {
        padding: '20px',
        backgroundColor: '#4caf50',
        color: 'white',
        fontSize: '20px',
        borderRadius: '5px',
        marginTop: '20px',
        textAlign: 'center'
      });
      $(successMessage).slideDown(500).delay(2000).slideUp(500, function() {
        successMessage.remove();
        window.location.href = './perfil.html';
      });
    } else {
      alert('Email ou senha incorretos.');
    }
  });
});