const levelData = {
  "1-10":  "Learn Frostbolt as your bread-and-butter. Spend first points on Arcane Subtlety → Arcane Focus. Prioritize quest XP and vendor gear.",
  "11-20": "Train Arcane Missiles (lvl 20). Start using Clearcasting procs immediately. First dungeon runs — keep mana up between pulls.",
  "21-30": "Improved Arcane Missiles (5/5). Arcane Explosion at 22 for AoE, but only on 3+ targets. Group quests for faster levels.",
  "31-40": "Arcane Concentration (5/5) — procs are your main damage. Train Arcane Blast (lvl 30) and start stacking. Stock mana potions.",
  "41-50": "Train Arcane Barrage (lvl 40) + Presence of Mind. Practice the burst window: 4 stacks → Arcane Missiles → Arcane Barrage → PoM instant.",
  "51-60": "Arcane Power at 60. Pre-raid prep: gear with Intellect, enchants, consumables. Rotation and mana management should be automatic by now."
};

const tabs = document.querySelectorAll('#levelTabs button');
const content = document.getElementById('tabContent');

function showTab(key) {
  content.textContent = levelData[key];
  tabs.forEach(b => b.classList.toggle('active', b.dataset.tab === key));
}
tabs.forEach(b => b.addEventListener('click', () => showTab(b.dataset.tab)));
showTab('1-10');
