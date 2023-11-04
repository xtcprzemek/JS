const container = document.querySelector('#container');
let boxNum =0;
window.onload = () => {
  let i =0;
  console.log("1 container.clientHeight",container.clientHeight);

  while (container.clientHeight<window.innerHeight) {
    generateBox("");
  }
  const allBoxes = document.querySelectorAll(".box");
 
  for (let i=0; i<allBoxes.length; i++){
    randomJoke().then(data => fillBox(allBoxes[i], data))
  }
 //console.log("2 container.clientHeight",container.clientHeight);
 //showWindowHeights();
};

function fillBox(box,data){
  box.innerHTML = `<P class="question">${data.setup}</P>
  <P class="answer">${data.punchline}</P>`;

}
function generateBox(data)  {
  boxNum++

  const box =document.createElement("div");
  box.className ="box";
  box.innerHTML = `<P class="question">${data.setup}</P>
  <P class="answer">${data.punchline}</P>`;
  container.appendChild(box);

};

function randomJoke(){
  return fetch("https://official-joke-api.appspot.com/random_joke")
  .then(response=>response.json())
  //.then(data=>data)
  ;
};


function showWindowHeights(){
  console.log("window.innerHeight=",window.innerHeight);
  console.log("window.scrollY=",window.scrollY);
  console.log(window.innerHeight+window.scrollY);
  console.log("document.documentElement.scrollHeight=",document.documentElement.scrollHeight);

}

document.addEventListener("scroll", (event) => {
if (window.scrollY+window.innerHeight +1 >=document.documentElement.scrollHeight){
  randomJoke().then(data => generateBox(data))
  
}
showWindowHeights()
});
