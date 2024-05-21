function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.style.display = menu.style.display === 'none' ? 'flex' : 'none';
  }
  
  const images = document.querySelectorAll('.carousel img');
  let currentIndex = 0;
  const intervalTime = 2000; // Change image every 2 seconds
  
  function changeImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
  }
  
  // Initially display the first image
  images[currentIndex].classList.add('active');
  
  // Change image every intervalTime milliseconds
  setInterval(changeImage, intervalTime);
  

   