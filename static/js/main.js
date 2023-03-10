import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js'

// Home page hero section slider

    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,

      autoplay: {
        delay: 5000,
      },

    });

// Home page Faqs section accordion

    let faqs_title = document.querySelectorAll(".faqs-accordion-title")

    faqs_title.forEach(ft => {

      const accordionContent = ft.nextElementSibling
      const pointer = ft.children.item(0)

      ft.onclick = () => {

        if (!accordionContent.classList.contains("effect")) {
          pointer.classList.add("rotate")
          accordionContent.classList.add("effect")
          accordionContent.style.height = 'auto'

          const elemHeight = accordionContent.clientHeight + "px"
          accordionContent.style.height = '0px'

          setTimeout(function () {
            accordionContent.style.height = elemHeight
          }, 0)

        } else {
          pointer.classList.remove("rotate")
          accordionContent.style.height = '0px'
          accordionContent.addEventListener('transitionend', () => {
            accordionContent.classList.remove('effect')
          }, {
            once: true
          })
        }

      }
    })


// Animated Inputs Field 

    let inputs = document.querySelectorAll(".input")
    inputs.forEach(input => {
      let label = input.children.item(0)
      let inputboxWrapper = input.children.item(1)
      let inputbox = inputboxWrapper.children.item(0)

      label.addEventListener("click", function () {
        label.classList.add("active")
        inputboxWrapper.classList.add("active")
        inputbox.focus()
      })

      inputbox.addEventListener("focus", function () {
        label.classList.add("active")
        inputboxWrapper.classList.add("active")
      })
      inputbox.addEventListener("focusout", function () {
        if (inputbox.value.trim() === '' || inputbox.value.trim() === ' ') {
          label.classList.remove("active")
          inputboxWrapper.classList.remove("active")
        }
      })
    })