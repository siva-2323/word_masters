
let turns=6;
let letters=document.querySelectorAll(".boxes");
let a1=document.querySelector(".logo");



// checking valid letters
let isLetter=(letter)=> {
    return /^[a-zA-Z]$/.test(letter);
  }

// backspace
let backspace=(input)=>
{
input=input.substring(0,input.length-1);
letters[row*5+input.length]="";
}

async function init()
{

    //fetch

    const random=await fetch("ttps://words.dev-apis.com/word-of-the-day");
    


    let row=0;
    let current="";
    

    // adding
    let addLetter=(input) =>
    {
        if (current.length<5){
            current+=input;
        }
    }

    // not typed full boxes
     function empty (){
        if(current.length !== 5){
            return;
        }
    }


    let guessParts=current.split("");
    

    document.addEventListener("keydown", function handleKeyPress(event) {
         
          // do nothing;
          return;
        );


}

init();

