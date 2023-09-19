import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col gap-4 p-4 text-center">
      <h1 className="text-2xl font-bold">
        Your Favorite Games, In React & Next JS
      </h1>
      <p className="text-sm opacity-70">
        Play Tic-Tac-Toe, Rock/Paper/Scissors, Guess the Number and more in this
        suite of games created by{" "}
        <a
          className="font-semibold underline"
          href="https://trevorthewebdeveloper.com/"
        >
          Trevor Brown
        </a>
        .
      </p>
      <div>
        <button className="p-4 text-white rounded-2xl bg-sky-800">
          Let's Play!
        </button>
      </div>
    </div>
  );
};

export default Hero;
