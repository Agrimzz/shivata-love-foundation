const faders = document.querySelectorAll(".fade-up");

const options = {
  threshold: 0.1,
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry, index) => {
    if (!entry.isIntersecting) return;

    setTimeout(() => {
      entry.target.classList.add("show");
    }, 200);

    observer.unobserve(entry.target);
  });
}, options);

faders.forEach((el, i) => {
  appearOnScroll.observe(el);
});
