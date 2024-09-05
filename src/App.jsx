import React from 'react';
import { Youtube, Twitter } from 'lucide-react';
import logo from './assets/logo.png';

const App = () => {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      <div className="bg-white text-black min-h-screen flex flex-col items-center justify-center p-4 font-['Inter',sans-serif]">
        <div className="max-w-3xl w-full">
          <div className="text-center mb-12">
            <h1 className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
                style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              Building companies <br /> and documenting <br /> the journey
            </h1>
            <div className="flex justify-center space-x-4 mt-8">
              <div className="flex items-center bg-black rounded-lg p-2 animate-fade-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
                <a href="https://youtube.com/@zak10x" target="_blank" rel="noopener noreferrer" className="text-red-500 mr-2"><Youtube size={24} /></a>
                <a href="https://x.com/zak10x" target="_blank" rel="noopener noreferrer" className="text-blue-500 mr-2"><Twitter size={24} /></a>
                <span className="text-sm text-white">@zak10x</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex flex-row bg-black text-white rounded-lg p-8 space-x-4 items-center w-full h-40 animate-fade-up opacity-0" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
              <img src={logo} alt="Kayno Labs Logo" className="rounded w-[75px] h-[75px]" />
              <div className="flex flex-col items-left justify-center text-left flex-grow">
                <div className="font-semibold mb-2">Kayno Labs</div>
                <div className="text-sm text-gray-300">Helping B2B Companies scale their revenue <br /> through proven marketing and sales systems</div>
              </div>
              <a href="https://kaynolabs.com" target="_blank" rel="noopener noreferrer" className="bg-transparent border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors self-center">Learn more</a>
            </div>
          </div>

          <div className="text-center text-sm text-gray-500 mt-12">
            © 2024 Isaac Porat
          </div>
        </div>
      </div>
    </>
  );
};

export default App;