import React from 'react'
import {render} from 'react-dom'
import DateApp from './DateApp'
import Search from './Search'
// import Editor from './MyCodeMirror'

const history_date = document.getElementById('history_date')
const search_box = document.getElementById('search_box')
// const ace_editor_render = document.getElementById('ace_editor_render')
if (history_date) {
  render(<DateApp />, history_date)
}
if (search_box) {
  render(<Search />, search_box)
}
// if (ace_editor_render) {
//   render(<Editor />, ace_editor_render)
// }

