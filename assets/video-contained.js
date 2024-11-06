document.getElementById('block-vid-play').addEventListener('click', () => {
  console.log('click ok');
  document.querySelector('.section-block-bg').play();
  document.querySelector('.section-block-wrapper .vid-overlay').style.opacity = '0';
  document.querySelector('.section-block-wrapper .vid-overlay').style.display = 'none';
  document.querySelector('.section-block-content').style.display = 'none';
  document.querySelector('.section-block-wrapper .btn-vid-play').style.opacity = '0';
})