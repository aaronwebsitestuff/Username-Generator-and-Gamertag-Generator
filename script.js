function generateName() {

const first = [
"Shadow","Nova","Pixel","Ghost","Void","Lunar","Toxic","Crimson","Neon","Frost",
"Storm","Cyber","Omega","Alpha","Dark","Silent","Iron","Solar","Quantum","Turbo",
"Hyper","Mystic","Savage","Rapid","Blaze","Inferno","Frozen","Venom","Night",
"Stealth","Atomic","Cosmic","Digital","Vortex","Thunder","Phantom","Obsidian",
"Echo","Specter","Rogue","Titan","Velocity","Radiant","Nebula","Glitch","Drift",
"Pulse","Apex","Zero","Binary","Chrome","Plasma","Orbit","Flux","Ultra","Prime",
"Vector","Cobalt","Zenith","Mirage","Havoc","Tempest","Ember","Fury","Gravity",
"Rift","Horizon","Matrix","Eclipse","Ion","Nitro","Blitz","Striker","HunterX",
"GhostX","NovaX","ShadowX","CyberX","NightX","DarkX"
];

const second = [
"Hunter","Sniper","Falcon","Knight","Phantom","Slayer","Rider","Walker","Runner",
"Striker","Raider","Guardian","Destroyer","Assassin","Warden","Ranger","Pilot",
"Commander","Captain","Warrior","Soldier","Scout","Agent","Ninja","Samurai",
"Gladiator","Champion","Vanguard","Sentinel","Paladin","Marauder","Tracker",
"Predator","Gunner","Blaster","Fighter","Crusher","Breaker","Shifter","Driver",
"Caster","Drifter","Seeker","Watcher","Storm","Bringer","Shaper","Hacker",
"Coder","Builder","Crafter","Miner","Explorer","Navigator","Surfer","Climber",
"Jumper","Strider","Diver","Charger","Rusher","Dasher","Blitzer","Shredder",
"Stormer","StrikerX","RaiderX","HunterX","KnightX","FalconX","SlayerX"
];

const numbers = ["","", "", Math.floor(Math.random()*1000)];

const a = first[Math.floor(Math.random() * first.length)];
const b = second[Math.floor(Math.random() * second.length)];
const c = numbers[Math.floor(Math.random() * numbers.length)];

document.getElementById("result").innerText = a + b + c;

}