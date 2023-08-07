import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';


const Home = () => {
  return (
    <div className="root">
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>AI-powered WhatsApp shopping assistant is helpful. It's akin to chatting with a friend who can instantly send you product photos, details, and prices. Shopping becomes effortless, just like texting!</h1>
          </div>
          <div className="header-subtitle">
            <h2>insert your subtitle here</h2>
          </div>
        </div>
        {/* Add this code here*/}
        <div className="prompt-container">
          <textarea placeholder="start typing here" className="prompt-box" />
        </div>
      </div>
      <div className="badge-container grow">
        <a
          href="https://buildspace.so/builds/ai-writer"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={buildspaceLogo} alt="buildspace logo" />
            <p>build with buildspace</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
