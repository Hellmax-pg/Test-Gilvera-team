let btnClose = document.querySelector('.warning__close-icon');

btnClose.addEventListener('click', function () {
    let header = document.querySelector('.warning');
    header.remove();
  })