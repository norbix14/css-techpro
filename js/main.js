document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form.form')
  if (form) {
    const btn = document.querySelector('.btn-submit')
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      btn.innerText = 'suscribiendose...'
      setTimeout(() => {
        btn.innerText = '¡suscrito!'
        btn.setAttribute('disabled', 'true')
        form.reset()
      }, 2000)
    })
  }
})
