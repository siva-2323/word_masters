const input = document.querySelectorAll(".box");

let row=0;

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
    }
}

let isLetter=inp =>
{
    return /^[a-zA-Z]$/.test(inp);
}

