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

function randomName(){
const a = first[Math.floor(Math.random()*first.length)];
const b = second[Math.floor(Math.random()*second.length)];
return a + b;
}

function playTick(){
const sound = tick.cloneNode(); // clean sound each time
sound.play();
}

function generateName(){

const result = document.getElementById("result");

let rolls = 0;
const maxRolls = 10;

let speed = 40; // fast start

function spin(){

result.innerText = randomName();

playTick();

rolls++;

/* slow down near the end */
if(rolls > 6){
speed += 40;
}else{
speed += 8;
}

if(rolls >= maxRolls){
return;
}

setTimeout(spin, speed);

}

spin();

}