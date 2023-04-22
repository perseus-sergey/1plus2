function component(text) {
  const el = document.createElement('h1')
  el.textContent = text
  return el
}

document.body.prepend(component('This is webpack!!!'))