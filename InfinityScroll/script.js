
const container= document.getElementById("container");
let boxNum =0;
const showParametersY = () => {
    console.log("window.innerHeight",window.innerHeight);
    console.log("window.scrollY", window.scrollY);
    console.log("sum", window.innerHeight+window.scrollY);
    console.log("document.body.scrollHeight",document.body.scrollHeight);
    console.log("document.body.clientHeight",document.body.clientHeight);
    console.log("document.documentElement.scrollHeight", document.documentElement.scrollHeight);
    
};
const getData = () => {
    return fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    
}

const generateInitialContent = (data)=>{
    
     while (window.innerHeight >= document.body.clientHeight){
         generateBox(data);  
     }
    
    
};


const generateBox = (data) => {
    console.log(data);
    boxNum++
    const box = document.createElement("div");
    box.className = "box";
    box.innerHTML ="<P>"+data.value+"</P>";
    container.appendChild(box);

};

window.onload = (event) => {
    let i=0;
     while (i<4){
        getData().then((data)=>generateBox(data))
        i++
        //generateBox({"value":"aaa"}); 
         }
    
    // )};
  };

addEventListener("scroll", (event) => {
    //showParametersY();
    if (window.scrollY + window.innerHeight+1 >=
        document.documentElement.scrollHeight
      ) {
        getData().then((data)=>generateBox(data));
      }
});