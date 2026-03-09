/* FAST PAGE FADE */

window.addEventListener("load", () => {
document.body.classList.add("loaded");
});


/* USERNAME GENERATOR */

const first = [
"Shadow","Nova","Pixel","Ghost","Void","Lunar","Toxic","Crimson","Neon","Frost",
"Storm","Cyber","Omega","Alpha","Dark","Silent","Iron","Solar","Quantum","Turbo"
];

const second = [
"Hunter","Sniper","Falcon","Knight","Phantom","Slayer","Raider","Guardian",
"Assassin","Ranger","Warrior","Ninja","Samurai","Gladiator","Predator"
];

const tick = new Audio("tick.mp3");
tick.volume = 0.6;

let spinning = false;
let historyList = [];

function randomName(){

const a = first[Math.floor(Math.random()*first.length)];
const b = second[Math.floor(Math.random()*second.length)];

return a + b;

}

function playTick(){

const sound = tick.cloneNode();
sound.play();

}

function generateName(){

if(spinning) return;

spinning = true;

const result = document.getElementById("result");

let rolls = 0;
const maxRolls = 10;
let speed = 40;

function spin(){

const name = randomName();

result.innerText = name;

playTick();

rolls++;

if(rolls > 6){
speed += 40;
}else{
speed += 8;
}

if(rolls >= maxRolls){

spinning = false;

addHistory(name);

return;

}

setTimeout(spin, speed);

}

spin();

}

function addHistory(name){

historyList.unshift(name);

if(historyList.length > 5){
historyList.pop();
}

const historyElement = document.getElementById("history");

historyElement.innerHTML="";

historyList.forEach(n=>{

const li=document.createElement("li");
li.innerText=n;

historyElement.appendChild(li);

});

}

function copyName(){

const text=document.getElementById("result").innerText;
navigator.clipboard.writeText(text);

}