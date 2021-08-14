"use strict";
let text=document.querySelector("#text");
let sctarr=Array.from(document.querySelectorAll('button'));
sctarr.forEach(function(element){
    
    element.addEventListener('click',function()
    {
        let tex;
        tex=element.id;
        playRound(tex);
    })
})

function computerPlay(){
    const inp = ["rock", "paper", "scissor"];
    let ran=Math.floor(Math.random() * 3);
    return inp[ran]
}

let nthround=1;
let finalplayer=0;
let finalcomp=0;





function playRound(playerSelection){
    let playermarks,compmarks;
    
    if(nthround>5){
        console.log("entered");
        textner(finalplayer,finalcomp);
    }

    if(nthround<=5)
    {
    
    let computerSelection=computerPlay();
    console.log("round:",nthround,"player:", finalplayer,"computer:", finalcomp);

    if(playerSelection==computerSelection)
    {   
        playermarks=0; compmarks=0;
        console.log(playermarks,compmarks);
    }

    else if(playerSelection=="rock")
    {
        if(computerSelection=="paper")
    {
        compmarks=1; playermarks=0;
        console.log(playermarks,compmarks);
    }

    else if(computerSelection=="scissor")
    {
        playermarks=1; compmarks=0;
        console.log(playermarks,compmarks);
    }
    }

    else if(playerSelection=="paper")
    {
        if(computerSelection=="scissor")
    {
        compmarks=1; playermarks=0;
        console.log(playermarks,compmarks);
    }
    else if(computerSelection=="rock")
    {
        playermarks=1; compmarks=0;
        console.log(playermarks,compmarks);
    }
    }

    else if(playerSelection=="scissor")
    {
    if(computerSelection=="rock")
    {
        compmarks=1;playermarks=0;
        console.log(playermarks,compmarks);
    }
    else if(computerSelection=="paper")
    {
        playermarks=1; compmarks=0;
        console.log(playermarks,compmarks);
    }
    }
    const div = document.createElement(`div${1}`);
    document.querySelector("#roundno").textContent=`ROUND ${nthround}`;
    document.querySelector("#text").textContent=`ROUND ${nthround}: Player selected ${playerSelection} and computer selected ${computerSelection}. Player scored:${playermarks} Computer scored:${compmarks}`;
}
    else {
    nthround++;
    console.log('nth',nthround);
    return;
    }
    finalplayer=finalplayer+playermarks;
    finalcomp=finalcomp+compmarks;
    console.log("final",finalplayer,finalcomp);
    nthround++;
    return [finalplayer,finalcomp];
}

function textner(num1,num2){
    if(num1>num2)
    {
        document.querySelector("#text").textContent="YOU WON AGAINST COMPUTER";
        document.body.style.backgroundColor = "green";
        return
    }

    else if(num2>num1)
    {
        document.querySelector("#text").textContent="COMPUTER WON AGAINST YOU";
        document.body.style.backgroundColor = "blue";
        return
    }
    
    else if(num1==num2)
    {
        document.querySelector("#text").textContent="TIE";
        return
    }
}