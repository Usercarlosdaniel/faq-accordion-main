const accordionBtn = document.querySelectorAll(".btn");

accordionBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.classList.toggle("active");
    const descr = this.nextElementSibling;
    const plusIcon = this.querySelector(".icon-faq-plus");
    const minusIcon = this.querySelector(".icon-faq-minus");

    if (
      descr.style.display === "none" ||
      window.getComputedStyle(descr).display === "none"
    ) {
      descr.style.display = "block";
      plusIcon.style.display = "none";
      minusIcon.style.display = "block";
    } else {
      descr.style.display = "none";
      plusIcon.style.display = "block";
      minusIcon.style.display = "none";
    }
  });
});
