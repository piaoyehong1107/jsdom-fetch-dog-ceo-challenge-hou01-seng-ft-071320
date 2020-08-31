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
      .then(breeds=>displaybreed(breeds))
}

function displaybreed(breeds){
        const list = document.getElementById('dog-breeds')
      //breeds = Object.keys(breeds.message);
        for (const key in breeds.message){
            allbreeds.push(key)
            h=document.createElement("li")
            h.innerText=key
            list.appendChild(h);
            h.addEventListener('click', changecolor);
            options=document.querySelector("select")
            options.addEventListener('change',selectDog)
        }
}
function selectDog(e){
newbrees=allbreeds.filter((breed)=>{breed[0]===e.target.value})
console.log(newbrees)
}
function changecolor(e){
    e.target.style.color = 'blue' 
}



document.addEventListener('DOMContentLoaded', function() {
 logimg();
 fatchbreed();
})