document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    const mathCaptcha = new MathCaptcha({
      selector: '[name=form]',
      eventType: 'blur'
    })
    document.querySelector('[name=form]').addEventListener('submit', function (e) {
      e.preventDefault()
      document.querySelector('body').style='cursor: wait;'
      var self = this
      setTimeout(function() {
        alert('form submitted!')
        mathCaptcha.finish()
        document.querySelector('body').style='cursor: auto;'
        self.reset()
        console.log('form submitted!')
      }, 5000)
      return false
    })
  }
}
