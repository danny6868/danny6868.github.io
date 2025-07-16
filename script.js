const colors = ['#fff', '#ff0', '#0ff', '#f0f', '#0f0', '#f00'];
const numConfetti = 150;

for (let i = 0; i < numConfetti; i++) {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti-piece');
  confetti.style.left = Math.random() * 100 + 'vw';
  confetti.style.top = Math.random() * -100 + 'px';
  confetti.style.animationDuration = 2 + Math.random() * 3 + 's';
  confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  confetti.style.width = confetti.style.height = Math.random() * 8 + 4 + 'px';
  document.body.appendChild(confetti);
}
