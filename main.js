const input = document.querySelectorAll(".box");

let row=0;

let word="MONEY";
document.addEventListener("keydown",function handleKeyPress(event){
    const pressed=event.key;
    
    if(pressed==="Enter") ent();
    else if(pressed==="Backspace")backspace();
    else if(isLetter(pressed)){
        addLetter(pressed.toUpperCase());
    }
});
current="";
let addLetter=inp =>{


    if(current.length<5)        // not fill
    {
    input[row].innerText=inp;
        row++;
        current +=inp;
    }else {
        // press enter to current="" & row++;
        input[row-1].innerText=inp;
    }
}


let isLetter=inp =>
{
    return /^[a-zA-Z]$/.test(inp);
}
let ent=inp =>
{
    if(current==word)
    {
        alert("you win");
    }else 
    {
        // pressed enter but word is not right
        current="";
    }
}


