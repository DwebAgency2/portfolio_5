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


