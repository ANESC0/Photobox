import lightbox_ui from "./lightbox_ui.js";
import lightbox from "./lightbox.js";

function display_gallery(gallery)  {
    let container = document.querySelector('#gallery_container');
    let config = "https://webetu.iutnc.univ-lorraine.fr/";
    container.innerHTML = gallery.photos.reduce((acc, elem) => {
        return acc + `
			<div class =  "vignette" data-uri = "${elem.links.self.href}" style="background-position: center; background-repeat: no-repeat; background-color: black; margin: 24px; display: inline-block; height: 300px; width: 380px; background-image: url('${config + elem.photo.thumbnail.href}'); background-size: cover; transform: rotate(`+Math.ceil((Math.random() * 10) - 5)+`deg); `+`  ">
				<!--<img data-img = "${elem.photo.original.href}" data-uri = "${elem.links.self.href}" src = "${config + elem.photo.thumbnail.href}">-->
			</div>
        `
    }, '');
    var images = document.querySelectorAll(".vignette");
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener("click", evt => {
            lightbox.load(images[i]).then(lightbox_ui.display_lightbox)
        })
    }
}

export default {
   display_gallery     
}