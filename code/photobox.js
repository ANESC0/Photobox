import gallery from "./gallery.js"
import gallery_ui from "./gallery_ui.js"

document.querySelector('#load_gallery')
  .addEventListener('click',  e => {
    gallery.load().then(gallery_ui.display_gallery)
  })

document.querySelector("#next")
    .addEventListener('click',evt => {
        gallery.next().then(gallery_ui.display_gallery)
    })

document.querySelector("#previous")
    .addEventListener('click',evt => {
        gallery.prev().then(gallery_ui.display_gallery)
    })

document.querySelector("#first")
    .addEventListener('click',evt => {
        gallery.first().then(gallery_ui.display_gallery)
    })

document.querySelector("#last")
    .addEventListener('click',evt => {
        gallery.last().then(gallery_ui.display_gallery)
    })
