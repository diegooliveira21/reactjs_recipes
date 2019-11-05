import React from "react";
import styles from "./battle.style.sass";

// Redux Components
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createSelector } from "reselect";
import { Creators as BattleActions } from "../../store/ducks/battle";

export const Battle = props => {
  // Select object by Desectruturing
  const { playerMeleeHit, playerFireballHit } = props;
  const { battle } = props;
  const { log } = props;
  const { bossAmount } = props;

  const battleLog = battle.log.map(item => <p>{item}</p>);

  console.log(battle);
  return (
    <div className="battle-wrapper">
      <img src="/charizard.png" alt="Sprite" width="320" />
      <div className="bossHPBar">
        <div className="bossHPBar__line" style={{ width: bossAmount }}></div>
      </div>
      <button
        value="10"
        onClick={() => {
          playerMeleeHit();
        }}
      >
        Melee Attack
      </button>
      <button
        value="10"
        onClick={() => {
          playerFireballHit();
        }}
      >
        Fireball
      </button>
      <div
        style={{
          width: "75%"
        }}
      >
        <p style={{ height: "100px", overflow: "scroll" }}>{battleLog}</p>
      </div>
    </div>
  );
};

// createSelector => Acesse diretamente o dado querido no estado
const AMOUNT_HP = createSelector(
  state => state.battle,
  battle => {
    return String((battle.boss.hp / battle.boss.hpMax) * 100) + "%";
  }
);

const BATTLE_LOG = createSelector(
  state => state.battle,
  battle => {
    return "l";
  }
);

// Toda vez que o log do turno for adicionado, o battle também sera atualizado, causando um leak na perfomance
const mapStateToProps = state => ({
  battle: state.battle,
  bossAmount: AMOUNT_HP(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(BattleActions, dispatch);

// Conecta, o state ao props, e o Creator, ao respectivo componente
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Battle);
