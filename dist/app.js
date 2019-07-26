document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    const mathCaptcha = new MathCaptcha({
        selector: '[name=form]'
    })
    document.querySelector('[name=form]').addEventListener('submit', function (e) {
      e.preventDefault()
      alert('form submitted!')
      console.log('form submitted!')
      this.reset()
      return false
    })
  }
}
