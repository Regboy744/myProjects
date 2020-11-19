const ATTACK_VALUE = 10; // It is in capital letter because i want to show it as a global variable
const ATTACK_MONTER_VALUE = 14; // It is in capital letter because i want to show it as a global variable
const STRONG_ATTACK_VALUE = 17;
const HEAL_VALUE = 20;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(ATTACK_MONTER_VALUE);
  currentPlayerHealth -= playerDamage;

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    setPlayerHealth(initialPlayerHealth);
    currentPlayerHealth = initialPlayerHealth;

    alert("You would be dead but the bonus life saved you");
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You won !!!");
    reset();
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("You lost");
    reset();
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert("You have a draw");
    reset();
  }
}

function attackMode(mode) {
  if (mode === "ATTACK_VALUE") {
    mode = ATTACK_VALUE;
  } else {
    mode = STRONG_ATTACK_VALUE;
  }
  const damage = dealMonsterDamage(mode);
  currentMonsterHealth -= damage;
  endRound();
}

function attackHandler() {
  attackMode("ATTACK_VALUE");
}

function strongAttackHandler() {
  attackMode("STRONG_ATTACK_VALUE");
}

function healPlayerHandler() {
  let healvalue;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert("You cannot heal to more than your initial health");
    healvalue = chosenMaxLife - currentPlayerHealth;
  } else {
    healvalue = HEAL_VALUE;
  }
  increasePlayerHealth(HEAL_VALUE);
  currentPlayerHealth += HEAL_VALUE;
  endRound();
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
