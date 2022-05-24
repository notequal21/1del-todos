
export function isWebp() {
  function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {
    let className = support === true ? 'webp' : 'no-webp'
    document.documentElement.classList.add(className)
  });
}

export const burgerJs = () => {
  if (document.querySelector('.header-body__burger')) {
    const openBtn = document.querySelector('.header-body__burger')
    const menu = document.querySelector('.mobile-menu')
    const body = document.querySelector('body')

    let toggleBurger = () => {
      if (openBtn.classList.contains('active')) {
        openBtn.classList.remove('active')
        menu.classList.remove('active')
        body.classList.remove('lock')
      } else {
        openBtn.classList.add('active')
        menu.classList.add('active')
        body.classList.add('lock')
      }
    }

    openBtn.addEventListener('click', toggleBurger)
  }
}

export const addNewModal = () => {
  if (document.querySelector('.addnew')) {
    const openBtn = document.querySelectorAll('.addnew-modal-open-btn')
    const modal = document.querySelector('.addnew')
    const modalClose = document.querySelector('.addnew__top-close')
    const body = document.querySelector('body')
    const content = document.querySelectorAll('.container')

    let toggleModal = (e) => {
      e.preventDefault()

      // let div = document.createElement('div');
      // div.style.overflowY = 'scroll';
      // div.style.width = '50px';
      // div.style.height = '50px';
      // document.body.append(div);
      // let scrollWidth = div.offsetWidth - div.clientWidth;

      // div.remove();

      if (modal.classList.contains('active')) {
        modal.classList.remove('active')
        body.classList.remove('lock')
        // if (window.innerWidth > 992) {
        //   content.forEach((item) => {
        //     item.style.maxWidth = `1320px`
        //     item.style.padding = ` 0 20px`
        //   })
        // }
      } else {
        modal.classList.add('active')
        body.classList.add('lock')
        // if (window.innerWidth > 992) {
        //   content.forEach((item) => {
        //     item.style.maxWidth = `${1320 + scrollWidth}px`
        //     item.style.padding = ` 0 ${scrollWidth + 20}px 0 20px`
        //   })
        // }
      }
    }

    openBtn.forEach((item) => {
      item.addEventListener('click', toggleModal)
    })
    modalClose.addEventListener('click', toggleModal)
  }
}