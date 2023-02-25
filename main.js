
let box=document.querySelectorAll(".box");




// checking valid letters
let isLetter=(input)=> {
    return /^[a-zA-Z]$/.test(input);
  }

  box.innerText=5;
async function init()
{
    let row=0;
    let currentWord="";         //user typing word

    //fetch the word

    const fetchResult=await fetch("https://words.dev-apis.com/word-of-the-day");
    const obj=await fetchResult.json();
    let words=obj.word;
    words=words.toUpperCase();
    let wordParts=words.split("");


    let addLetter=input =>
    {
        if(currentWord.length<5)
        {
            currentWord +=input;
        }else {
            currentWord=currentWord.substring(0,currentWord.length-1)+input;
        }
        box[row*5+currentWord.length-1].innerText=input;
    }

    async function commit (){               //pressed enter

        if(currentWord.length !==5){
            return;
        }
            const inputWord=currentWord.split("");
            
    }
  

    document.addEventListener("keydown",function handleKeyPress(event){
        const pressed =event.key;

        if(pressed =="Enter") commit();
        else if(pressed="Backspace") backspace();
        else if(isLetter(pressed)) addLetter(pressed.toUpperCase());
        
    });

}

  init();


