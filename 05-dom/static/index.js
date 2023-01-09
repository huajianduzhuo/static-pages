(function () {
  let p = document.querySelector('p')
  let style = window.getComputedStyle(p, null)
  console.log(style.color)
})()