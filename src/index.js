console.log('%c HI', 'color: firebrick')

let allbreeds=[];

function logimg(){
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res=>res.json())
    .then(json=>displayimg(json))

function displayimg(dogs){
  console.log(dogs)
  // const list = document.querySelector('#dog-image-container')
  // dogs.message.forEach(dog=>{
  //   h=document.createElement("img")
  //   h.src=dog
  //   list.appendChild(h)
  // })
}
}

function fatchbreed(){
  fetch('https://dog.ceo/api/breeds/list/all')
      .then(res=>res.json())
      .then(breeds=>displaybreed(Object.keys(breeds.message)))
}

function displaybreed(breeds){
  console.log({breeds})
  const allbreeds = [] 
  const list = document.getElementById('dog-breeds')
  // breeds = Object.keys(breeds.message);
  breeds.forEach(key => {
      allbreeds.push(key)
      h=document.createElement("li")
      h.innerText=key
      list.appendChild(h);
      h.addEventListener('click', changecolor);
  })
  console.log({allbreeds})
  
}

function selectDog(e){
  newbrees=[]
  allbreeds.forEach((breed)=>{if(breed[0]===e.target.value){
    newbrees.push(breed)
  }})
  displaybreed(newbrees)
  console.log(newbrees)
  // e.target.value=""
}

function changecolor(e){
    e.target.style.color = 'blue' 
}



document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('breed-dropdown')
        .addEventListener("click", selectDog)

 logimg();
 fatchbreed();
})