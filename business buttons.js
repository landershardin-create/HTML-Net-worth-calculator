const businessButtons = document.querySelectorAll('#businessGroup button');
businessButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    console.log(`${btn.id} clicked`);
  });
});
