const hoverImage = document.getElementById('hoverImage');
let hoverTimer;

hoverImage.addEventListener('mouseenter', () => {
  hoverTimer = setTimeout(() => {
    window.location.href = 'index1.html'; 
  }, 1500); // 1.5 seconds hover before navigation
});

hoverImage.addEventListener('mouseleave', () => {
  clearTimeout(hoverTimer);
});