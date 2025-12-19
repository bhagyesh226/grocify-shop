import React from 'react';

const name = ['G', 'r', 'o', 'c', 'i', 'F', 'y'];

const SplashScreen = () => {
 
  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center 
      bg-gradient-to-b from-yellow-400 to-yellow-600 overflow-hidden
      transition-opacity duration-400   `}
    >

      {/* Animated Border Box */}
      <div className="absolute w-[220px] h-[220px] md:w-[300px] md:h-[300px]
        rounded-2xl border-b-2  border-l-2
        shadow-[0_0_40px_rgba(255,94,0,0.6)]
        animate-spin-slow"
      />

      {/* Background G */}
      <div className="absolute text-[12rem] md:text-[18rem] animate-ping  font-extrabold
        text-white/60 select-none ">
        G
      </div>

      {/* Logo */}
      <div className="relative z-10 flex">
        {name.map((letter, index) => (
          <span
            key={index}
            className={`logo-letter ${
              letter === 'G' || letter === 'F'
                ? 'text-orange-800'
                : 'text-zinc-900'
            }`}
            style={{ animationDelay: `${index * 0.12}s` }}
          >
            {letter}
          </span>
        ))}
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes letterIn {
            0% {
              opacity: 0;
              transform: translateY(18px) scale(0.96);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          .logo-letter {
            font-size: 2.8rem;
            font-weight: 800;
            animation: letterIn 0.55s cubic-bezier(.25,.8,.25,1) forwards;
            opacity: 0;
          }

          @media (min-width: 768px) {
            .logo-letter { font-size: 4rem; }
          }

          @keyframes spinSlow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          .animate-spin-slow {
            animation: spinSlow 12s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default SplashScreen;
