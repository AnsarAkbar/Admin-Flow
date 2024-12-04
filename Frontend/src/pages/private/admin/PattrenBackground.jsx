import React from 'react';

const PatternBackground = () => {
  return (
    <main className="relative w-full h-screen bg-gray-100">
      <div className="absolute inset-0">
        {/* Background pattern SVG */}
        <svg fill="none" className="w-full h-full">
          <defs>
            <pattern
              x="0"
              y="0"
              id="pattern-1526ac66-f54a-4681-8fb8-0859d412f251"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
            </pattern>
          </defs>
          <rect
            fill="url(#pattern-1526ac66-f54a-4681-8fb8-0859d412f251)"
            width="100%"
            height="100%"
            stroke="none"
          ></rect>
        </svg>
      </div>
      <div className="relative z-10 flex justify-center items-center h-full">
        {/* Content goes here */}
        <h1 className="text-4xl font-bold text-gray-800">Welcome to the admin page</h1>
      </div>
    </main>
  );
};

export default PatternBackground;
