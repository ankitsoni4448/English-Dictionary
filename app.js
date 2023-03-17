const inputEl = document.getElementById("input")


function fetchAPI(word){
   // console.log(word);
   const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

   const result = fetch(url).then((res) => res.json());
   console.log(result);
}


inputEl.addEventListener("keyup",(e)=>{
//console.log(e.target.value);  chaching the value 
if(e.target.value && e.key === "Enter"){
    fetchAPI(e.target.value)
}
})