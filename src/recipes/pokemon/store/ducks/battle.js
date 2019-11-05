// Actions
const type = {
  BOSS_HIT: "BOSS_HIT",
  PLAYER_HIT: "PLAYER_HIT",
  CHOOSE_TEAM: "CHOOSE_TEAM"
};

// Reducer
const initialState = {
  team: [],
  boss: {
    hp: 2850,
    hpMax: 2850,
    mana: 100,
    skills: {
      melee: {
        label: "Melee Attack",
        damage: 15
      },
      flamethrower: {
        label: "Flamethrower",
        damage: 50
      }
    }
  },
  player: {
    hp: 100,
    mana: 100,
    skills: {
      melee: {
        label: "Melee Attack",
        damage: 15
      },
      fireball: {
        label: "Fireball",
        damage: 50
      }
    }
  },
  log: []
};

export default function bossReducer(state = initialState, action) {
  switch (action.type) {
    case type.PLAYER_HIT:
      return {
        ...state,
        boss: {
          ...state.boss,
          hp: state.boss.hp - action.skill.damage
        },
        player: {
          ...state.player,
          mana: state.player.mana - action.mana
        },
        log: [...state.log, "Player cast " + action.skill.label + "!"]
      };
      break;
    case type.BOSS_HIT:
      return {
        ...state,
        boss: {
          ...state.boss,
          mana: state.boss.mana - action.mana
        },
        player: {
          ...state.player,
          hp: state.player.hp - action.skill.damage
        }
      };
      break;
    default:
      return state;
  }
}

// Declare Actions
export const Creators = {
  playerMeleeHit: () => ({
    type: type.PLAYER_HIT,
    skill: initialState.player.skills.melee,
    mana: 0
  }),
  playerFireballHit: () => ({
    type: type.PLAYER_HIT,
    skill: initialState.player.skills.fireball,
    mana: 25
  }),

  bossMeleeHit: () => ({
    type: type.BOSS_HIT,
    skill: initialState.player.skills.melee,
    mana: 0
  }),
  bossFlamethrowerHit: () => ({
    type: type.BOSS_HIT,
    skill: initialState.player.skills.flamethrower,
    mana: 25
  })
};
