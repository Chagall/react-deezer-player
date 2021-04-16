import React, { useEffect } from "react";
import PropTypes from "prop-types";

export default function DeezerBar({isAutoplay, width, height, detailsHexColor, radioId, isDarkTheme}) {
  useEffect(() => create());

  const create = () => {
    let w = document[
      typeof document.getElementsByClassName === "function"
        ? "getElementsByClassName"
        : "querySelectorAll"
    ]("deezer-widget-player");

    for (let i = 0, l = w.length; i < l; i++) {
      w[i].innerHTML = "";

      let el = document.createElement("iframe");

      el.src = w[i].getAttribute("data-src");
      el.scrolling = w[i].getAttribute("data-scrolling");
      el.frameBorder = w[i].getAttribute("data-frameborder");
      el.setAttribute("frameBorder", w[i].getAttribute("data-frameborder"));
      el.allowTransparency = w[i].getAttribute("data-allowTransparency");
      el.width = w[i].getAttribute("data-width");
      el.height = w[i].getAttribute("data-height");

      w[i].appendChild(el);
    }
  };

  return (
    <div
      style={barStyle}
      className="deezer-widget-player"
      data-src={`https://www.deezer.com/plugins/player?format=classic&autoplay=${isAutoplay}&playlist=true&width=${width}&height=${height}&color=${detailsHexColor}&layout=${isDarkTheme? "dark" : ""}&size=medium&type=radio&id=${radioId}&app_id=1`}
      data-scrolling="no"
      data-frameborder="0"
      data-width="100%"
      data-height="92px"
    ></div>
  );
}

DeezerBar.propTypes = {
  isAutoplay: PropTypes.bool.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  detailsHexColor: PropTypes.string.isRequired,
  radioId: PropTypes.string.isRequired,
  isDarkTheme: PropTypes.bool.isRequired,
};

const barStyle = {
  position: "fixed",
  top: "auto",
  bottom: -6,
  left: -2,
  width: "100vw",
};
