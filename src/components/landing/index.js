import React from "react";
import ReactTypingEffect from 'react-typing-effect';
import Navbar from "../navbar/index";
import Info from "../../assets/1.png";
import FeatureSection from "./featureSection";
import "./landing.css";

const sub = ["Recommendations","Feeds","Ads"];
export default function Landing() {
  return (
    <>
      <Navbar />
      <div className="landing">
        <h1>Decentralised Ad Recommendation</h1>
        <p>A new way to get your{" "}
          <span>
        <ReactTypingEffect
        text={sub}
        // eraseSpeed={100}
        eraseDelay={100}
        typingDelay={10}
        cursorRenderer={cursor => <h3>{cursor}</h3>}
        displayTextRenderer={(text, i) => {
          return (
            <h3>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={i%2 === 0 ? { color: 'white'} : {}}
                  >{char}</span>
                );
              })}
            </h3>
          );
        }}        
      />
      </span>
</p>
        <div className="landing-img-div">
          <img src={Info} alt="info" />
        </div>
      </div>
      <FeatureSection/>
      
    </>
  );
}
