import store from '../Store';

// REDUX
import { getMonsterHealth, getCharHealth } from '../Store/game';

const state = store.getState();
const game = state.game;

let tick = 0;

// CHARACTER PROPERTIES
let charHealth = game.charHealth;
let charDamage = state.hero.damage + state.user.damage;
let charPose = 0;
let charAttacking = false;
let charHurt = false;
let charJump = true;

// MONSTER PROPERTIES
let monsterHealth = game.monsterHealth;
let monsterDamage = 5;
let monsterRange = 85;
let monsterPose = 0;
let monsterAttacking = false;
let monsterHurt = false;

const updateStore = () => {
  const state = store.getState();
  charDamage = state.hero.damage + state.user.damage;
}

const damageChar = () => {
  charHealth -= monsterDamage
}

const damageMonster = () => {
  updateStore();
  console.log('damageMonster', charDamage)
  monsterHealth -= charDamage
}

const dispatchCharHealth = () => {
  store.dispatch(getCharHealth(charHealth));
}

const dispatchMonsterHealth = () => {
  store.dispatch(getMonsterHealth(monsterHealth));
}

const disableCharJump = () => {
  charJump = false;
}

const incrementTick = () => {
  tick++;
}

export {
  charHealth,
  monsterHealth,
  monsterRange,
  charPose,
  monsterPose,
  charJump,
  tick,
  damageChar,
  damageMonster,
  dispatchCharHealth,
  dispatchMonsterHealth,
  disableCharJump,
  incrementTick
}
