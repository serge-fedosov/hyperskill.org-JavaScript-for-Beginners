const music = ["rock", "pop", "hip-hop", "electronic"];

function myFavoriteMusic(music) {
    music.forEach(showItem);
}

function showItem(item, index, array) {
    console.log(`My favorite music is ${item} choosing from ${array}`);
}
