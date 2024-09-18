let score = 0;
let clickPower = 1;
let upgradeCost = 10;

const scoreDisplay = document.getElementById('score');
const upgradeCostDisplay = document.getElementById('upgradeCost');
const clickerButton = document.getElementById('clicker');
const upgradeButton = document.getElementById('upgrade');

clickerButton.addEventListener('click', () => {
    score += clickPower;
    updateScore();
});

upgradeButton.addEventListener('click', () => {
    if (score >= upgradeCost) {
        score -= upgradeCost;
        clickPower += 1;
        upgradeCost *= 2;
        updateScore();
        updateUpgradeCost();
    } else {
        alert('Not enough points to upgrade!');
    }
});

function updateScore() {
    scoreDisplay.textContent = `Score: ${score}`;
}

function updateUpgradeCost() {
    upgradeCostDisplay.textContent = `Upgrade Click Power (Cost: ${upgradeCost} Points)`;
}

updateScore();
updateUpgradeCost();
