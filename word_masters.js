
let box=document.querySelectorAll(".box");




// checking valid letters
let isLetter=(input)=> {
    return /^[a-zA-Z]$/.test(input);
  }

async function init()
{
    let row=0;
    let currentWord="";

    //fetch the word

    const fetchResult=await fetch("https://words.dev-apis.com/word-of-the-day");
    const obj=await fetchResult.json();
    let words=obj.word;
    words=words.toUpperCase();
    let wordParts=words.split("");

    async function commit (){

        if(currentWord.length !==5){
            return;
        }

    }


    document.addEventListener("keydown",function handleKeyPress(event){
        const pressed =event.key;

        if(pressed =="Enter") commit();
        else if(pressed="Backspace") backspace();
        else if(isLetter(pressed)) addLetter(pressed.toUpperCase());
        
    });

}

  init();


