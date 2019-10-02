import React from "react";
import ReactDOM from "react-dom";

// Na const que declara o objeto, tudo que não for especificado,
// será passado para o spread ...otherPropsDontSpecifiedHere e então cada
// props será declarado individualmente
const Button = props => {
  const { kind, ...otherPropsDontSpecifiedHere } = props;
  const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
  return <button className={className} {...otherPropsDontSpecifiedHere} />;
};

const Spread = () => {
  return (
    <div className="some">
      <Button kind="primary" onClick={() => console.log("clicked!")}>
        Hello World!
      </Button>
    </div>
  );
};

export default Spread;
