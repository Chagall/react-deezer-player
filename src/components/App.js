import React from "react";
import "../css/App.css";
import DeezerBar from "./DeezerBar";

function App() {
  return (
    <div className="App">
      <DeezerBar
        isAutoplay={false}
        width={700}
        height={350}
        detailsHexColor={"EF5466"}
        radioId={"radio-37635"}
        isDarkTheme={true}
      />
    </div>
  );
}

export default App;
