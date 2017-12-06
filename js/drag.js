const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;


const handleMouseDown = ev => {
  isDown = true;
  slider.classList.add('active');
  startX = ev.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};

const handleMouseLeave = ev => {
  isDown = false;
  slider.classList.remove('active');
}

const handleMouseUp = ev => {
  isDown = false;
  slider.classList.remove('active');
}


const handleMouseMove = ev => {
  if (!isDown) return;
  ev.preventDefault();
  const x = ev.pageX - slider.offsetLeft;
  const walk = x - startX;
  slider.scrollLeft = scrollLeft - walk;
}

slider.addEventListener('mousedown', handleMouseDown);
slider.addEventListener('mouseleave', handleMouseLeave);
slider.addEventListener('mouseup', handleMouseUp);
slider.addEventListener('mousemove', handleMouseMove);