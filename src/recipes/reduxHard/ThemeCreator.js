import React, { useState, useEffect } from "react";
import "./creator.style.sass";

// Redux Components
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createSelector } from "reselect";
import { Creators as CreatorTheme } from "./store/ducks/creator";

const Creator = props => {
  const { footerCustom, headerCustom } = props;
  const { creator } = props;

  useEffect(() => {});

  console.log(props);
  return (
    <>
      <h3>Footer Columns</h3>
      <div className="columns-store"></div>
      <button>Adicionar coluna</button>

      <h3>Footer Rows</h3>
      <div className="rows-store"></div>
      <button>Adicionar linhas</button>

      <h3>Footer Background</h3>
      <div className="background-store"></div>
      <input type="number" />

      <footer></footer>
    </>
  );
};

const mapStateToProps = state => ({
  footer: state.creator.footer,
  header: state.creator.header,
  creator: state.creator
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CreatorTheme, dispatch);

// Conecta, o state ao props, e o Creator, ao respectivo componente
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Creator);
