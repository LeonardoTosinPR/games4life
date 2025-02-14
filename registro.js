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
  const birthdateInput = document.getElementById('birthdate');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;
    const birthdate = birthdateInput.value;

    let isValid = true;

    if (!validateEmail(email)) {
      emailInput.classList.add('invalid');
      isValid = false;
    } else {
      emailInput.classList.remove('invalid');
    }

    if (!validatePassword(password)) {
      passwordInput.classList.add('invalid');
      alert('A senha deve ter pelo menos 6 caracteres.');
      isValid = false;
    } else {
      passwordInput.classList.remove('invalid');
    }

    if (!validateBirthdate(birthdate)) {
      birthdateInput.classList.add('invalid');
      alert('Você deve ter pelo menos 18 anos para se registrar.');
      isValid = false;
    } else {
      birthdateInput.classList.remove('invalid');
    }

    if (isValid) {
      // Se todas as validações passarem, armazene os dados no LocalStorage
      const userData = {
        email: email,
        password: password,
        birthdate: birthdate
      };

      localStorage.setItem('userData', JSON.stringify(userData));

      // Exibir animação de sucesso
      $('body').append('<div id="success-message" style="display:none;">Registro bem-sucedido!</div>');
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
        form.submit();
      });
    }
  });

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function validatePassword(password) {
    return password.length >= 6;
  }

  function validateBirthdate(birthdate) {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age >= 18;
  }
});