import photoloader from "./photoloader.js";
import lightbox_ui from "./lightbox_ui.js";
import gallery from "./gallery.js";
import gallery_ui from "./gallery_ui.js";

var photoCourante;
var commentaire;

function load(node) {
    photoCourante = node;
    var test = node.getAttribute("data-uri")
    return photoloader.loadRessource(test);
}

function next() {
    if (photoCourante.nextElementSibling === null){
        gallery.next().then(response => {
            gallery_ui.display_gallery(response)
            let container = document.getElementById("gallery_container")
            load(container.firstElementChild).then(lightbox_ui.display_lightbox)
        })

    }else{
        load(photoCourante.nextElementSibling).then(lightbox_ui.display_lightbox)
    }
}

function prev() {
    if (photoCourante.previousElementSibling === null){
        gallery.prev().then(response => {
            gallery_ui.display_gallery(response)
            let container = document.getElementById("gallery_container")
            load(container.lastElementChild).then(lightbox_ui.display_lightbox)
        })
    }else{
        load(photoCourante.previousElementSibling).then(lightbox_ui.display_lightbox)
    }

}

export default {
    load,
    next,
    prev
}