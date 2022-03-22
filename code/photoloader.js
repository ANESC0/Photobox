
function loadPicture(idPicture) {
    return fetch('https://webetu.iutnc.univ-lorraine.fr/www/canals5/phox/api/photos' + idPicture, {
    credentials : 'include'
})
    .then(response => {
        if(response.ok){
            return response.json();
        } else {
            console.log("response error : " + response.status)
        }
    })
    .catch(error=> alert("Erreur : " + error))
}

function loadRessource(uri) {
    return fetch("https://webetu.iutnc.univ-lorraine.fr" + uri, {
        credentials : 'include'
    })
    .then(response => {
        if(response.ok){
            return response.json();
        } else {
            console.log("Erreur : " + response.status)
        }
        
    })
    .catch(error => alert("Erreur : " + error))
}


export default {
    loadPicture,
    loadRessource
}