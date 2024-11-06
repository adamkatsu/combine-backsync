document.getElementById('home-vid-play').addEventListener('click', () => {
  console.log('click ok');
  document.querySelector('.home-vid-full').play();
  document.querySelector('.home-vid .vid-overlay').style.opacity = '0';
  document.querySelector('.home-vid .vid-overlay').style.display = 'none';
  document.querySelector('.home-vid .btn-vid-play').style.opacity = '0';
})