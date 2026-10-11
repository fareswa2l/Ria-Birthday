const giftButton = document.getElementById('giftButton');
const giftModal = document.getElementById('giftModal');
const closeModal = document.getElementById('closeModal');
const modalBackdrop = document.getElementById('modalBackdrop');
const againButton = document.getElementById('againButton');
const tapLabel = document.getElementById('tapLabel');

function makeConfetti() {
  const pieces = ['♥', '✦', '✧', '♡', '✿'];
  for (let i = 0; i < 34; i++) {
    const piece = document.createElement('span');
    piece.className = 'confetti';
    piece.textContent = pieces[Math.floor(Math.random() * pieces.length)];
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.top = `${-10 - Math.random() * 30}px`;
    piece.style.color = ['#d96b83', '#f0bd77', '#c6a5d9', '#f5a9bc'][Math.floor(Math.random() * 4)];
    piece.style.animationDelay = `${Math.random() * 0.65}s`;
    piece.style.fontSize = `${12 + Math.random() * 14}px`;
    document.body.appendChild(piece);
    window.setTimeout(() => piece.remove(), 3200);
  }
}

function openGift() {
  giftButton.classList.add('opened');
  tapLabel.textContent = 'SURPRISE! ♡';
  giftModal.classList.add('visible');
  giftModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  makeConfetti();
  closeModal.focus();
}
function closeGift() {
  giftModal.classList.remove('visible');
  giftModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  giftButton.focus();
}

giftButton.addEventListener('click', openGift);
closeModal.addEventListener('click', closeGift);
modalBackdrop.addEventListener('click', closeGift);
againButton.addEventListener('click', () => {
  makeConfetti();
  againButton.textContent = 'Sending you the biggest hug! 💗';
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && giftModal.classList.contains('visible')) closeGift();
});