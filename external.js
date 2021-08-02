function computerPlay(){
    const inp = ["rock", "paper", "scissor"];
    let ran=Math.floor(Math.random() * 3);
    return inp[ran]
}


function game(playerSelection,computerSelection){
    let playermarks=0;
    let compmarks=0;

if(playerSelection==computerSelection)
{
    playermarks=0;
    compmarks=0;
}

else if(playerSelection=="rock")
{
    if(computerSelection=="paper")
    {
        compmarks=1;
    }
    else if(computerSelection=="scissor")
    {
        playermarks=1;
    }
}

else if(playerSelection=="paper")
{
    if(computerSelection=="scissor")
    {
        compmarks=1;
    }
    else if(computerSelection=="rock")
    {
        playermarks=1;
    }
}

else if(playerSelection=="scissor")
{
    if(computerSelection=="rock")
    {
        compmarks=1;
    }
    else if(computerSelection=="paper")
    {
        playermarks=1;
    }
}

return {playermarks,compmarks};
}

let userinp = window.prompt("Input");
let compinp=computerPlay();
let userinp1=userinp.toLowerCase();
let out=game(userinp1,compinp);

console.log("COMPUTER:",compinp);
console.log("USER:",userinp1);
console.log(out);