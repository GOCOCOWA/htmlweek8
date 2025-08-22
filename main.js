import './assets/scss/all.scss';

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 2.5,
  spaceBetween: 24,
    breakpoints: {
    // 手機 (0px 以上)
    0: {
      slidesPerView: 1.3, // 一次只顯示 1.3張
    },
  },
   navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});             
// const swipers = new Swiper(".mySwipers", {
//   slidesPerView: 2.5,
//   spaceBetween: 24,
//     breakpoints: {
//     // 手機 (0px 以上)
//     0: {
//       slidesPerView: 1.1, // 一次只顯示 1.1張
//     },
//     // 平板 (768px 以上)
    
//     // 桌機 (992px 以上)
//     992: {
//       slidesPerView: 1.8, // 一次顯示 1.8 張
//     }
//   },
//    navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   }
// });

const swipers = new Swiper(".mySwipers", {
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
    breakpoints: {
     
      0: { slidesPerView: 1.1 },
      992: { slidesPerView: 1.8 }
    }
  });


// const swiperm = new Swiper(".mySwiperm", {
//   slidesPerView: 2.5,
//   spaceBetween: 24,
//     breakpoints: {
//     // 手機 (0px 以上)
//     0: {
//       slidesPerView: 1.1, // 一次只顯示 1.1張
//     },
//     // 平板 (768px 以上)
    
//     // 桌機 (992px 以上)
//     992: {
//       slidesPerView: 4, // 一次顯示 4 張
//     }
//   },
//    navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   }
// });
const swiperm = new Swiper(".mySwiperm", {
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-nextm",
      prevEl: ".swiper-prevm",
    },
    breakpoints: {
     
      0: { slidesPerView: 1.1 },
      992: { slidesPerView: 4 }
    }
  });


