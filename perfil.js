document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);

  var modalElems = document.querySelectorAll('.modal');
  var modalInstances = M.Modal.init(modalElems);

  var selectElems = document.querySelectorAll('select');
  var selectInstances = M.FormSelect.init(selectElems);

  // Carregar informações do perfil
  function loadProfile() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
      document.getElementById('user-email').textContent = userData.email;
      document.getElementById('user-birthdate').textContent = userData.birthdate;
    }
  }

  // Adicionar funcionalidade de logout
  document.getElementById('logout-button').addEventListener('click', function() {
    localStorage.removeItem('userData');
    window.location.href = './login.html';
  });

  loadProfile();
});

document.addEventListener("DOMContentLoaded", function () {
  const userData = localStorage.getItem("userData");
  const userAvatar = document.querySelector(".user-avatar");
  const loginLink = document.querySelector(".login-link");

  if (userData) {
    userAvatar.style.display = "block";
    loginLink.style.display = "none";
  } else {
    userAvatar.style.display = "none";
    loginLink.style.display = "block";
  }
});
