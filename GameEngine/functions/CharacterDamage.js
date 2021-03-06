import {
  damageMonster,
  dispatchMonsterHealth,
  monsterHealth,
  charHealth,
} from '../Global';

import store from '../../Store';

export const characterDamage = (entities) => {
  let char = entities.initialChar.body;
  let monster = entities.initialMonster.body;

  const state = store.getState();
  let charRange = state.hero.range;

  if (
    Math.abs(char.position.x - monster.position.x) < charRange &&
    monsterHealth > 0 &&
    charHealth > 0
  ) {
    damageMonster();
    dispatchMonsterHealth();
  }
};
