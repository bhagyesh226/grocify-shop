import React from 'react';

const name = ['G', 'r', 'o', 'c', 'i', 'F', 'y'];

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-yellow-400 to-yellow-600 overflow-hidden">

      {/* Background Growing G */}
      <div
        className="absolute text-[20rem] font-extrabold text-white/90 select-none"
        style={{
          animation: 'growG 1.5s ease-out forwards',
        }}
      >
        G
      </div>

      {/* Normal Website Name */}
      <div className="relative z-10 flex">
        {name.map((letter, index) => (
          <span
            key={index}
            className={`text-5xl md:text-6xl font-bold ${
              letter === 'G' || letter === 'F'
                ? 'text-orange-700'
                : 'text-zinc-700'
            }`}
          >
            {letter}
          </span>
        ))}
      </div>

      {/* Inline keyframes (NO config needed) */}
      <style>
        {`
          @keyframes growG {
            0% {
              transform: scale(0.3);
              opacity: 0.1;
            }
            100% {
              transform: scale(1);
              opacity: 0.50;
            }
          }
        `}
      </style>

    </div>
  );
};

export default SplashScreen;
