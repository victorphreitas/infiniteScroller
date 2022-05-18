//API url 
const apiKey = '1yAiI3KAAAvDkGgwJc-2TVh7_AQmqbMGgyW4CVUMJMY';
const countPhotos = 12;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${countPhotos}`

const containerImg = document.getElementById('image-container')
let counter = 0, loaded = false

async function getPhotos(){
  const response = await fetch(apiUrl)
  const data = response.json()

  if (counter === countPhotos){
    counter = 0
  }
  loaded = true

  data.then(arr=>{  
    arr.forEach(photo=>{
      containerImg.innerHTML += `<div class="container-item"><a class="links" href="${photo.links.html}" target="_blank"><img src=${photo.urls.regular} alt="${photo.alt_description}" tittle="${photo.alt_description}">
      </a></div>`
      counter++
      console.log(counter)
    })
  })
}
getPhotos()

//if user scrolls all the way to the bottom you call this function again 
document.addEventListener('scroll', scrolling);

function scrolling(event){

  if (scrollY + window.innerHeight >= document.body.offsetHeight - 300 && loaded){
    loaded = false
    getPhotos()
  }
  
  event.preventDefault()
}
