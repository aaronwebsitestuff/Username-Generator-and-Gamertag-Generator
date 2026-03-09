const first = [
"Shadow","Nova","Pixel","Ghost","Void","Lunar","Toxic","Crimson","Neon","Frost",
"Storm","Cyber","Omega","Alpha","Dark","Silent","Iron","Solar","Quantum","Turbo"
];

const second = [
"Hunter","Sniper","Falcon","Knight","Phantom","Slayer","Raider","Guardian",
"Assassin","Ranger","Warrior","Ninja","Samurai","Gladiator","Predator"
];

const tick = new Audio("tick.mp3");

function randomName(){
const a = first[Math.floor(Math.random()*first.length)];
const b = second[Math.floor(Math.random()*second.length)];
return a + b;
}

function generateName(){

const result = document.getElementById("result");

let rolls = 0;
let maxRolls = 12;   // much fewer rolls
let delay = 30;      // very fast start
let slowdown = 1.2;  // slight slowdown

function roll(){

result.innerText = randomName();

/* play tick */
tick.currentTime = 0;
tick.play();

rolls++;

if(rolls >= maxRolls){
return;
}

delay = delay * slowdown;

setTimeout(roll, delay);

}

roll();

}