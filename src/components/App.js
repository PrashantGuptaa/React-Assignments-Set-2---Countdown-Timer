import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  let [timer, setTimer] = React.useState(0);
  let [text, setText] = React.useState(0);

  const StartTimer = (event) => {
    if (event.keyCode === 13) {
      let num;
      try {
        num = Number(text);
      } catch (err) {
        console.log("Error Occuered: ", err);
      }

      if (typeof text === String || !text || num < 0) setTimer(0);
      setTimer(num);
      console.log("Enter Pressed: ", num, timer);
      if (timer < 0) {
        setTimer(0);
      }
    }
  };

  const handleChange = (event) => setText(event.target.value);

  React.useEffect(() => {
    setTimeout(() => {
      if (timer <= 0) return;
      setTimer(timer - 1);
      console.log("Timeout");
    }, 1000);
  }, [timer]);

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for{" "}
          <input
            id="timeCount"
            onKeyDown={StartTimer}
            onChange={handleChange}
          />{" "}
          sec.
        </h1>
      </div>
      <div id="current-time">{timer}</div>
    </div>
  );
};

export default App;
