# Math-Captcha

This plugin adds a captcha box before the submit button in your form.

#### How to use:

```javascript
/* Inicialização */
var mathCaptcha = new MathCaptcha({
  selector: '#form'
})

/* Default parameters */
MathCaptcha.defaults = {
  selector: '[name=form]',
  inputClass: 'form-control',
  inputName: 'captcha',
  placeholder: 'calc result',
  labelClass: 'calc',
  calcValueClass: 'calc__value',
  calcResultClass: 'calc__result',
  wrapperClass: 'math-captcha',
  submitSelectorClass: '[type=submit]'
}
```

_Made By_ [fripixel.com.br](https://fripixel.com.br)


