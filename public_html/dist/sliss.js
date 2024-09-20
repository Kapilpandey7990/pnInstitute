document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper(".pns-slide-content", {
      slidesPerView: 3,
      spaceBetween: 25,
      loop: true,
      centerSlide: 'true',
      fade: 'true',
      grabCursor: 'true',
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 2,
        },
        950: {
          slidesPerView: 3,
        },
      },
    });
  });



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
        setInterval(autoSlide, 2000);

        // Adjust the slide on window resize
        window.addEventListener('resize', () => {
            showSlide(currentIndex);
        });