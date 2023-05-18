// Declare your genre arrays here
let rnbContainer = document.querySelector(".rnb");

let rnbUrls = [
	'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/0c/e6/74/0ce674cd-649f-bd54-4ddc-19854228f719/0.jpg/1200x1200bf-60.jpg', 'https://images.genius.com/4f3c2796e4868784ce4a79b9043f4a64.1000x1000x1.png' , 'https://upload.wikimedia.org/wikipedia/en/d/d7/SZA_-_Shirt.png'
];

for (let url of rnbUrls) {
  let img = "<img src=" + url + ">";
  rnbContainer.insertAdjacentHTML("beforeend", img);
}

let rapContainer = document.querySelector(".rap");

let rapUrls = [
	'https://i1.sndcdn.com/artworks-4Rhm3PjWQB2z-0-t500x500.jpg', 'https://upload.wikimedia.org/wikipedia/en/c/c6/Die_Lit_by_Playboi_Carti.jpg', 'https://images.genius.com/cbad795cdb3843247073fac8af76b117.1000x1000x1.png'
];

for (let url of rapUrls) {
  let img = "<img src=" + url + ">";
  rapContainer.insertAdjacentHTML("beforeend", img);
}

let popContainer = document.querySelector(".pop");

let popUrls = [
	'https://cdns-images.dzcdn.net/images/cover/98610629a40996b61b3d24bd5ab8c2e1/500x500.jpg', 'https://static.wikia.nocookie.net/taylor-swift/images/4/44/Taylorswift1989tardlx.png/revision/latest?cb=20201105165335', 'https://i.scdn.co/image/ab67616d0000b27313e54d6687e65678d60466c2'
];

for (let url of popUrls) {
  let img = "<img src=" + url + ">";
  popContainer.insertAdjacentHTML("beforeend", img);
}

// Make sure to declare your HTML elements as variables! 

// Submit Button 
let submitButton = document.querySelector("button");
let genre;

submitButton.onclick = function() {
	genre = document.querySelector(".genreInput").value;
    console.log (genre);
    if (genre === "rnb") {
        rnbContainer.style.display= "block";
    } else if (genre === "pop") {
    popContainer.style.display = "block";
    } else if (genre === "rap") {
    rapContainer.style.display = "block";
    }
}; 

let suggest = document.querySelector (".suggest");
let songs = [];
let suggestions = document.querySelector (".img");

suggest.onclick = function() {
	let suggestInput = document.querySelector(".suggestions").value;
     songs.push(suggestInput);
     console.log(songs);
    for (let song of songs){
    suggestions.insertAdjacentHTML("afterend","<img src="+song+">");
    }
};




