if (document.addEventListener) {
  document.addEventListener('contextmenu', function (e) {
    toggleContextMenu('context-menu-01', e)
    e.preventDefault()
  }, false)
} else {
  document.addEventListener('oncontextmenu', function (e) {
    toggleContextMenu('context-menu-01', e)
    window.event.returnValue = false
  })
}

// Toggle the menu
function toggleContextMenu(id, e) {
  let menu = document.getElementById(id)

  // lets show if
  if (menu.classList.contains('context-open')) {
    // close
    menu.classList.add('context-insta-close')
    menu.classList.remove('context-open')
    menu.classList.remove('context-insta-close')
  } else {
    menu.style.left = (e.pageX + 8) + 'px';
    menu.style.top = (e.pageY + 8) + 'px';
    menu.classList.add('context-open')
  }
}

function handleBlur() {
  const menu = document.querySelector('div#context-menu-01')

  document.addEventListener('click', e => {
    if (menu.classList.contains('context-open')) {
      menu.classList.remove('context-open')
    }
  })
}
handleBlur()