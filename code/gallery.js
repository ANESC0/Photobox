
import photoloader from "./photoloader.js";
var gallery;

var count;
var max;

function load() {
    return gallery = photoloader.loadRessource("/www/canals5/phox/api/photos")
}

function next(){
	count++;
    return gallery.then(response =>{
        return gallery = photoloader.loadRessource(response.links.next.href);
    })
}

function prev(){
	count--;
    return gallery.then(response =>{
        return gallery = photoloader.loadRessource(response.links.prev.href);
    })
}

function first(){
	count = 1;
    return gallery.then(response =>{
        return gallery = photoloader.loadRessource(response.links.first.href);
    })
}

function last(){
    return gallery.then(response =>{
        return gallery = photoloader.loadRessource(response.links.last.href);
    })
}

            

export default {
    load,
    prev,
    next,
    first,
    last,
	max
}