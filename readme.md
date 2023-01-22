# Shortly Website

Made following a tutorial by Brad Traversy. Site deployed on Vercel: [Loop Studios](https://loop-studios-navy.vercel.app/ 'Click to visit site')

## What things have I learned working on this project?
+ How to create an animated hamburger menu with detailed instructions.
+ How to use JS to toggle classes that open/close hamburger menu - really simple:
```javascript
const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

btn.addEventListener('click', navToggle)

function navToggle() {
    btn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
}
```
+ How to add gradient overlays to images.
+ How to style things for small screens and large screens by selectively hiding elements on one and displaying them on the other.
+ How to add the line-clamp plugin to the config file:
```javascript
plugins: [require('@tailwindcss/line-clamp')]
```
+ How to change an HTML element to always have certain styles applied to it:
```javascript
@layer base {
  h5 {
    @apply absolute px-6 duration-200 md:w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black
  }
}
```

## How would I rate this project?
| Satisfying | Edifying | Total Score |
|------------|----------|-------------|
| 4/5        | 4.5/5    | 4.5/5       |
