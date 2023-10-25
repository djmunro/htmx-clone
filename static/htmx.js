document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', function(event) {
    const target = event.target
    const url = target.getAttribute('hx-get')

    if (url) {
      fetch(url)
        .then(response => response.text())
        .then(html => {
          const targetAction = target.getAttribute('hx-target')

          const element = document.querySelector(targetAction)
          if (element) {
            element.innerHTML = html
          }
        })
    }
  })
})