function generateName() {

const first = ["Shadow","Nova","Pixel","Ghost","Void","Lunar","Toxic"];
const second = ["Hunter","Sniper","Falcon","Knight","Phantom","Slayer"];

const a = first[Math.floor(Math.random() * first.length)];
const b = second[Math.floor(Math.random() * second.length)];

document.getElementById("result").innerText = a + b;

}