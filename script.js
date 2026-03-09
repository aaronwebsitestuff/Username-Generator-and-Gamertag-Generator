function generateName() {

const first = [
"Shadow","Nova","Pixel","Ghost","Void","Lunar","Toxic","Crimson","Neon","Frost",
"Storm","Cyber","Omega","Alpha","Dark","Silent","Iron","Solar","Quantum","Turbo",
"Hyper","Mystic","Savage","Rapid","Blaze","Inferno","Frozen","Venom","Night",
"Stealth","Atomic","Cosmic","Digital","Vortex","Thunder","Phantom","Obsidian",
"Echo","Specter","Rogue","Titan","Velocity","Radiant","Nebula","Glitch","Drift"
];

const second = [
"Hunter","Sniper","Falcon","Knight","Phantom","Slayer","Rider","Walker","Runner",
"Striker","Raider","Guardian","Destroyer","Assassin","Warden","Ranger","Pilot",
"Commander","Captain","Warrior","Soldier","Scout","Agent","Ninja","Samurai"
];

const a = first[Math.floor(Math.random() * first.length)];
const b = second[Math.floor(Math.random() * second.length)];

const result = document.getElementById("result");

result.classList.remove("show-name");
void result.offsetWidth;

result.innerText = a + b;

result.classList.add("show-name");

}