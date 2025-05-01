const hoverImage = document.getElementById('hoverImage');
let hoverTimer;

hoverImage.addEventListener('mouseenter', () => {
  hoverTimer = setTimeout(() => {
    window.location.href = 'file:///Users/jinnykim/Documents/core%202%20studio/Irvine/entry1/index1.html'; 
  }, 1500); // 1.5 seconds hover before navigation
});

hoverImage.addEventListener('mouseleave', () => {
  clearTimeout(hoverTimer);
});