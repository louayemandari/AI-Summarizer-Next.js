import React from 'react';

import Image from 'next/image';
function Hero() {
  return (

    <header className="bg-black text-white p-8 rounded-lg shadow-lg">
        
      <nav className="flex flex-row justify-between items-center">
        <Image src={null} alt="Company Logo" className="w-16 h-16" />
        <button 
        onClick={()=>window.open('https://www.github.com/louayemandari')}
         className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-full transition duration-300">
          GitHub
        </button>
      </nav>
      <h1 className="text-4xl font-bold mt-4">
        Summarize Articles with <br />
        <span className="text-blue-400">OpenAI GPT-4</span>
      </h1>
      <h2 className="text-xl mt-2">
        Simplify your reading with AI, using an open-source article summarizer
        we can transform lengthy articles into clear and concise summaries !
      </h2>
    </header>
  );
}

export default Hero;
