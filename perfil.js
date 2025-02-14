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
      document.getElementById('user-platforms').textContent = userData.platforms ? userData.platforms.join(', ') : '';
    }
  }

  // Salvar informações do perfil
  document.getElementById('edit-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('edit-email').value;
    const birthdate = document.getElementById('edit-birthdate').value;
    const platforms = Array.from(document.getElementById('edit-platforms').selectedOptions).map(option => option.value);

    const userData = {
      email: email,
      birthdate: birthdate,
      platforms: platforms
    };

    localStorage.setItem('userData', JSON.stringify(userData));
    loadProfile();
    M.Modal.getInstance(document.getElementById('edit-modal')).close();
  });

  loadProfile();
});
