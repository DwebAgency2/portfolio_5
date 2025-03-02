//For sticky nav bar

const header = document.querySelector('header');

window.addEventListener('scroll', function () {
  header.classList.toggle('sticky',window.scrollY > 120)
})


/*
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");

  if (header) {
    window.addEventListener("scroll", function () {
      requestAnimationFrame(() => {
        header.classList.toggle("sticky", window.scrollY > 120);
      });
    });
  }
});
*/
//For scroll

const scrollers = document.querySelectorAll(".scroller")

if (!window.matchMedia("(prefers-reduce-motion: reduce)").matches) {
  addAnimation()
}

function addAnimation () {
  scrollers.forEach(scroller => {
    scroller.setAttribute('data-animated', true);


    const scrollerInner = scroller.querySelector(".scroller__inner")

    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach(item => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute('aria-hidden',true)
      scrollerInner.appendChild(duplicatedItem)
    })
  })
}


const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 20,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});





document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu_icon");
  const navList = document.querySelector(".navlist");
  const navLinks = document.querySelectorAll(".navlist a");

  // Toggle menu on menu icon click
  menuIcon.addEventListener("click", function () {
    navList.classList.toggle("active");
  });

  // Hide menu when clicking on a menu item
  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      navList.classList.remove("active");
    });
  });
});



AOS.init();