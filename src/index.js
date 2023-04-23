import './template.html'
import './index.scss'
import { mult, sum } from './modules/calc'

function component(text) {
  const el = document.createElement('h1')
  el.textContent = text
  return el
}

document.body.prepend(component(`${mult(3, 4)}  ${sum(3, 4)}`))