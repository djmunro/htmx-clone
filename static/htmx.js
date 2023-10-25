document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', function(event) {
    const target = event.target
    const url = target.getAttribute('hx-get')

    if (url) {
      fetch(url)
        .then(response => response.text())
        .then(html => {
          const hxTarget = target.getAttribute('hx-target')
          const hxSwap = target.getAttribute('hx-swap')

          if (hxTarget) {
            const element = document.querySelector(hxTarget)
            if (element) {
              element.innerHTML = html
            }
          }
          else if (hxSwap) {
            target[hxSwap] = html
          }
        })
    }
  })
})