document.querySelectorAll('#right-buttons .button-in-header').forEach((item) => {
  item.addEventListener('click', (e) => {
    document.getElementById('active-menu').removeAttribute('id');

    e.target.setAttribute('id', 'active-menu');
  });
});
const sun = document.getElementById('sun');
const grayCloud = document.getElementById('gray-clouds');
const whiteCloud = document.getElementById('white-clouds');
const bird1 = document.getElementById('bird1');
const bird2 = document.getElementById('bird2');
const bird3 = document.getElementById('bird3');

const mountain0 = document.getElementById('mountain0');
const mountain1 = document.getElementById('mountain1');
const mountain2 = document.getElementById('mountain2');
const mountain3 = document.getElementById('mountain3');
const mountain4 = document.getElementById('mountain4');
const mountain5 = document.getElementById('mountain5');
const mountain6 = document.getElementById('mountain6');
const mountain7 = document.getElementById('mountain6');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // 태양 움직이기
  sun.style.transform = `translateY(${scrollY * 1.05}px)`;

  // 구름 움직이기
  grayCloud.style.transform = `translateX(${scrollY * 0.13}px)`;
  whiteCloud.style.transform = `translateX(${scrollY * -0.25}px)`;
  // 새 움직이기
  bird1.style.transform = `translateX(${scrollY}px)`;
  bird2.style.transform = `translateX(${scrollY * 1.2}px)`;
  bird3.style.transform = `translateX(${scrollY * -1.5}px)`;

  //산 움직이기
  mountain0.style.transform = `translateY(${scrollY * 0.95}px)`;
  mountain1.style.transform = `translateY(${scrollY * 0.93}px)`;
  mountain2.style.transform = `translateY(${scrollY * 0.9}px)`;
  mountain3.style.transform = `translateY(${scrollY * 0.8}px)`;
  mountain4.style.transform = `translateY(${scrollY * 0.7}px)`;
  mountain5.style.transform = `translateY(${scrollY * 0.6}px)`;
  mountain6.style.transform = `translateY(${scrollY * 0.3}px)`;
  mountain7.style.transform = `translateY(${scrollY * 0.1}px)`;
});
