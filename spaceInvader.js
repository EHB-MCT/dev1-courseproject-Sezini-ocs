"use strict";
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawLine();

function drawLine()

{   
    context.beginPath();
    context.fillStyle = "black";
    context.rect(50,50,300,300);
    context.fill(); 

    context.beginPath();
    context.fillStyle="#00FF00"
    context.rect(125,125,150,50);
    context.fill(); 

    context.beginPath();
    context.fillStyle="#00FF00"
    context.rect(175,175,50,50);
    context.fill(); 

    context.beginPath();
    context.fillStyle="#00FF00"
    context.rect(75,225,100,100);
    context.fill(); 

    context.beginPath();
    context.fillStyle="#00FF00"
    context.rect(225,225,100,100);
    context.fill(); 

    context.beginPath();
    context.fillStyle="#00FF00"
    context.rect(175,275,50,50);
    context.fill(); 



}



