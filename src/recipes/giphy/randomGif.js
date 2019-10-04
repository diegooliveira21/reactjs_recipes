import React, { useState, useEffect } from "react";
import getGiphy from "./giphyAPI";

const Iframe = props => {
  return (
    <>
      <iframe
        src={props.gif}
        width="480"
        height="270"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      ></iframe>
    </>
  );
};

const Gif = props => {
  const [giphy, setGiphy] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await getGiphy(
        "random",
        "CV7X1YqbYO11oD10Y5G7G3NxFPIEtHuT"
      );
      setGiphy(result.data.embed_url);
    };
    fetchData();
  }, []);

  return <Iframe gif={giphy} />;
};

export default Gif;
