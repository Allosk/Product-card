  document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('imageModal');
    var modalImage = document.getElementById('modalImage');
    var sliderImages = document.querySelectorAll('.slider-image');
    var closeModalButton = document.getElementById('closeModal');

    sliderImages.forEach(function (image) {
        image.addEventListener('click', function () {
            modal.style.display = 'block';
            modalImage.src = this.src;
        });
    });

    closeModalButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });
});

const swiper = new Swiper('.swiper', {

  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },



});

