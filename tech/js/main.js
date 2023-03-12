const myCarouselElement = document.querySelector('#carouselExample')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: true,

})


var swiper = new Swiper(".stockSwiper", {
  slidesPerView: "auto",
  spaceBetween: 15,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.stock__button_next',
    prevEl: '.stock__button_prev',
  },
});
  
  var swiper2 = new Swiper(".bestSwiper", {
    slidesPerView: 2,
    spaceBetween: 40,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var swiper3 = new Swiper(".newSwiper", {
    slidesPerView: 2,
    spaceBetween: 40,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  var swiper4 = new Swiper(".secNavSwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var swiper4 = new Swiper(".salesSwiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var swiper5 = new Swiper(".salesBrandsSwiper", {
    slidesPerView: "auto",
    spaceBetween: 15,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.stock__button_next',
      prevEl: '.stock__button_prev',
    },
  });
 

  var swiper6 = new Swiper(".recomendationSwiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var swiper7 = new Swiper(".recomendationBrandsSwiper", {
    slidesPerView: 3,
    spaceBetween: 15,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.stock__button_next',
      prevEl: '.stock__button_prev',
    },
  });

  var swiper8 = new Swiper(".eventsSwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.stock__button_next',
      prevEl: '.stock__button_prev',
    },
  });
 
