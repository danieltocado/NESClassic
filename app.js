let botonpower = document.querySelector('#accionpower')

botonpower.addEventListener('click', () => luz1.style.backgroundColor='lightgreen')

botonpower.addEventListener('click', () => luz2.style.backgroundColor='gray')

let botonreset = document.querySelector('#accionreset')

botonreset.addEventListener('click', () => luz1.style.backgroundColor='orange')

botonreset.addEventListener('click', () => luz2.style.backgroundColor='gray')

let botoneject = document.querySelector('#accioneject')

botoneject.addEventListener('click', () => subcartucho.style.backgroundImage="url('/img/ranura2.png')")



