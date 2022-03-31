import lightbox from "./lightbox.js";
import photoloader from "./photoloader.js";

function display_lightbox(data) {
    let container = document.querySelector("#lightbox_container");
    let config = "https://webetu.iutnc.univ-lorraine.fr/";
    let linkCom = data.links.comments;
    let lesComPromise = photoloader.loadRessource(linkCom.href)
    container.innerHTML = `
    <div id="lightbox">
    <div id="lightbox-head">
        <p id="lightbox_close">X</p>
        <h1 id="lightbox_title">${data.photo.titre}</h1>
    </div>

    <div id="lightbox-img">
        <button id = "prev-img"> &#10154; </button>
        <img id="lightbox_full_img" src="${config + data.photo.url.href}">
        <button id = "next-img"> &#10154; </button>
    </div>
    <div id = "infos-photo">
         <h1> <u>Description :</u> ${data.photo.descr} </h1><br></br>
         <h1> <u>Format :</u> ${data.photo.format} </h1> <br></br>
         <h1> <u>Les commentaires :</u> </h1> 
         <div id="commentaire_photo">
         
        </div>
    </div>
</div>
    `
    lesComPromise.then(response => {
        let divPhoto = document.querySelector('#commentaire_photo');
        let commmentaires = "";
        for (let i=0;i<response.comments.length; i++){
            if (response.comments[i].content !=""){
                
                commmentaires += `<div class="comm">Pseudo : ${response.comments[i].pseudo} | <p>Titre : ${response.comments[i].titre} | ${response.comments[i].content}</p></div>`
            }
        }
            divPhoto.innerHTML = commmentaires;
        }
    )
    document.querySelector('#lightbox_close').addEventListener('click', e => {
        hide();
    })

    document.querySelector('#prev-img').addEventListener('click', evt => {
        lightbox.prev()
    })

    document.querySelector('#next-img').addEventListener('click',evt => {
        lightbox.next()
    })
}

function show() {
    document.getElementById("lightbox").classList.toggle("lightbox");
}

function hide() {
    document.getElementById("lightbox").classList.toggle("hide");
}

export default {
    display_lightbox, 
    show, 
    hide
}