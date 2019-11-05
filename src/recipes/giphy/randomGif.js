import React, { useState, useEffect } from "react";
import getGiphy from "./giphyAPI";
import Helmet from "react-helmet";

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

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Random Gif Generator!</title>
        <meta name="description" content="Generate your gif for free <3" />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Iframe gif={giphy} />
    </>
  );
};

export default Gif;
