"use strict";
function computerPlay(){
    const inp = ["rock", "paper", "scissor"];
    let ran=Math.floor(Math.random() * 3);
    return inp[ran]
}

function game(playerSelection,computerSelection){
    let playermarks,compmarks;

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
        playermarks=0;


    }
    else if(computerSelection=="scissor")
    {
        playermarks=1;
        compmarks=0;

    }
}

else if(playerSelection=="paper")
{
    if(computerSelection=="scissor")
    {
        compmarks=1;
        playermarks=0;


    }
    else if(computerSelection=="rock")
    {
        playermarks=1;
        compmarks=0;

    }
}

else if(playerSelection=="scissor")
{
    if(computerSelection=="rock")
    {
        compmarks=1;
        playermarks=0;


    }
    else if(computerSelection=="paper")
    {
        playermarks=1;
        compmarks=0;


    }
}

return [playermarks,compmarks];

}
let comp=0;
let player=0;

function actualgame(roundsnumber){
    for(let i=0;i<roundsnumber;i++)
    {
        
        let compinp=computerPlay();
        let userinp = window.prompt("Input (Give rock/paper/scissor)");
        let userinp1=userinp.toLowerCase();
        console.log(`Round ${i}`);
        console.log("Computer chose " +compinp+" and you chose " +userinp1);
        let out=game(userinp1,compinp);
        comp=comp+out[0];
        player=player+out[1];
        console.log(`User points:${comp} Computer points:${player}`);
    }
}
function winner(num1,num2){
    if(num1>num2)
    {
        console.log("YOU WON AGAINST COMPUTER");
        return "YOU WON AGAINST COMPUTER";
    }

    else if(num2>num1)
    {
            console.log("COMPUTER WON AGAINST YOU");
            return "COMPUTER WON AGAINST YOU";
    }
    
    else if(num1==num2)
    {
        console.log("TIE");
    }
}

let rounds = window.prompt("NUMBER OF ROUNDS");
let result=actualgame(rounds);
let win=winner(player,comp);
console.log(typeof(win));
document.write(win);
