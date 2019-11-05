import React from "react";
import styles from "./battle.style.sass";

// Redux Components
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createSelector } from "reselect";
import { Creators as TeamActions } from "../../store/ducks/team";
