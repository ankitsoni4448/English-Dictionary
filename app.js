const inputEl = document.getElementById("input")


function fetchAPI(word){
    console.log(word);
}


inputEl.addEventListener("keyup",(e)=>{
//console.log(e.target.value);  chaching the value 
if(e.target.value && e.key === "Enter"){
    fetchAPI(e.target.value)
}
})