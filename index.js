// Footer ko observe karo
const footer = document.querySelector('.footer');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      footer.classList.add('show');
      footer.classList.remove('hidden');
    }
  });
});

observer.observe(footer);