import React, { useEffect } from "react";

export default function DeezerBar() {
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
      data-src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=EF5466&layout=&size=medium&type=radio&id=radio-37635&app_id=1"
      data-scrolling="no"
      data-frameborder="0"
      data-width="100%"
      data-height="92px"
    ></div>
  );
}

const barStyle = {
  position: "fixed",
  top: "auto",
  bottom: -6,
  left: -2,
  width: "100vw",
};
