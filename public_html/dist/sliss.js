  const swiper = new Swiper('.slider-wrapper', {
    
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
    

    // Pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    

    // Responsive breakpoints
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      430: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 4
      }
    }
    
    
  });

// clpn slider 
let currentIndex = 0;
const slides = document.querySelector('.clpn-slider-wrapper');
const totalCards = document.querySelectorAll('.clpn-slider-wrapper .clpn-card').length;
const cardsVisible = 3; // Number of visible cards at a time

// Automatically move to the next slide
function autoSlide() {
  nextSlide();
}

// Show the next slide
function nextSlide() {
  currentIndex++;
  if (currentIndex >= totalCards - cardsVisible + 1) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

// Show the previous slide
function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = totalCards - cardsVisible;
  }
  showSlide(currentIndex);
}

// Display the slide
function showSlide(index) {
  const cardWidth = document.querySelector('.clpn-card').clientWidth;
  slides.style.transform = `translateX(${-index * cardWidth}px)`;
}

// Auto slide every 3 seconds
// setInterval(autoSlide, 2000);

// Adjust the slide on window resize
window.addEventListener('resize', () => {
  showSlide(currentIndex);
});

