document.addEventListener('DOMContentLoaded', function() {
  const elemsDropdown = document.querySelectorAll('.dropdown-trigger');
  const instancesDropdown = M.Dropdown.init(elemsDropdown, {
    // specify options here
  });

  const elemsCarousel = document.querySelectorAll('.carousel');
  const instancesCarousel = M.Carousel.init(elemsCarousel, {
    fullWidth: true,
    indicators: true
  });
});