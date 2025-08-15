document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.service-card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('expanded');
    });
  });
});

