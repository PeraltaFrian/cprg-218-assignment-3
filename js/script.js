function loadComponent(id, file, callback) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
      if (callback) callback(); 
    })
    .catch(err => console.error(`Error loading ${file}:`, err));
}

window.addEventListener('DOMContentLoaded', () => {
  loadComponent('navbar', 'components/navbar.html');

  loadComponent('header', 'components/header.html', () => {
    if (typeof loadWeatherWidget === 'function') {
      loadWeatherWidget();
    } else {
      console.warn("loadWeatherWidget function is not available.");
    }
  });

  loadComponent('footer', 'components/footer.html');
});
