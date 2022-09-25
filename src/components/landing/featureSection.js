import React from "react";
import Privacy from "../../assets/privacy.gif";
import "./landing.css";
import Trans from "../../assets/transp.gif"
import censorship from "../../assets/censor.gif"

export default function FeatureSection() {
  return (
    <div className="landing-column feature-div">
      <h1 className="feature-div-h1">Our Amazing Features</h1>
      <div className="landing-row">
        <div className="landing-column ">
          <div class="card">
            <img src={Privacy} class="avatar" />
            <h1 class="title">
              User Control and{" "}
              <span>
                Privacy<span></span>
              </span>
            </h1>
          </div>
        </div>

        <div className="landing-column">
          <div class="card">
            <img src={censorship} class="avatar" />
            <h1 class="title">
              Censorship{" "}
              <span>
                Resistant<span></span>
              </span>
            </h1>
          </div>
          <p> </p>
        </div>
        <div className="landing-column">
          <div class="card">
            <img src={Trans} class="avatar" />
            <h1 class="title">
              Transparency{" "}
              <span>
                <span></span>
              </span>
            </h1>
          </div>
          <p></p>
        </div>
      </div>
    </div>
  );
}