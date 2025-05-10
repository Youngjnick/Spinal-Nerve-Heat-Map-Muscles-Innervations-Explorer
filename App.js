const legendItems = document.querySelectorAll('.legend-item');
const regions = document.querySelectorAll('.region');

legendItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    const root = item.getAttribute('data-root');
    regions.forEach(region => {
      region.classList.remove('highlighted');
      if (region.getAttribute('data-root') === root) {
        region.classList.add('highlighted');
      }
    });
  });

  item.addEventListener('mouseout', () => {
    regions.forEach(region => region.classList.remove('highlighted'));
  });
});
