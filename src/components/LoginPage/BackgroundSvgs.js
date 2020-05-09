import React from "react";
import "./bgsvg.css";
import "./bgshps.css";

function BackgroundSvgs(props) {
  return (
    <div className="bg-svg-holder">
      <svg className="bottom-circle" viewBox="0 0 461 461">
        <defs>
          <style></style>
          <clipPath id="clip-path" transform="translate(208 -39)">
            <rect className="bot-cir-1" width="300" height="308" />
          </clipPath>
        </defs>
        <path
          className="bot-cir-3"
          d="M22.5,39C-104.8,39-208,142.2-208,269.5S-104.8,500,22.5,500,253,396.8,253,269.5,149.8,39,22.5,39Zm1.23,377.09A146.43,146.43,0,1,1,170.15,269.66,146.43,146.43,0,0,1,23.73,416.09Z"
          transform="translate(208 -39)"
        />
      </svg>
      <svg className="top-circle" viewBox="0 0 488 488">
        <defs>
          <clipPath id="clip-path" transform="translate(-16 336)">
            <rect className="top-cir-1" width="508" height="160" />
          </clipPath>
        </defs>

        <path
          className="top-cir-3"
          d="M260-336C125.24-336,16-226.76,16-92S125.24,152,260,152,504,42.76,504-92,394.76-336,260-336Zm1.3,399.17a155,155,0,0,1-155-155,155,155,0,0,1,155-155,155,155,0,0,1,155,155A155,155,0,0,1,261.3,63.17Z"
          transform="translate(-16 336)"
        />
      </svg>
      <svg className="in-circle" viewBox="0 0 92 92">
        <path
          className="in-cir-1"
          d="M46,0A46,46,0,1,0,92,46,46,46,0,0,0,46,0Zm.24,75.25A29.22,29.22,0,1,1,75.47,46,29.22,29.22,0,0,1,46.24,75.25Z"
        />
      </svg>
      <svg className="left-box" viewBox="0 0 198.64 180.62">
        <defs>
          <clipPath id="clip-path" transform="translate(84.84 -14.52)">
            <rect className="left-box-1" width="140" height="200" />
          </clipPath>
        </defs>

        <path
          className="left-box-3"
          d="M33.13,17.87l-97,44.78a36.18,36.18,0,0,0-17.67,48l29.32,63.47a36.17,36.17,0,0,0,48,17.67l97-44.78a36.17,36.17,0,0,0,17.67-48L81.14,35.54A36.17,36.17,0,0,0,33.13,17.87ZM68.78,90.32a36.17,36.17,0,0,1-17.67,48L16.28,154.41a36.16,36.16,0,0,1-48-17.67l-6.53-14.13a36.17,36.17,0,0,1,17.67-48L14.24,58.51a36.18,36.18,0,0,1,48,17.67Z"
          transform="translate(84.84 -14.52)"
        />
      </svg>
      <svg className="in-box" viewBox="0 0 84.59 74.76">
        <path
          className="in-box-1"
          d="M74.09,15.92,30.56.86A15.6,15.6,0,0,0,10.72,10.5L.86,39A15.6,15.6,0,0,0,10.5,58.84L54,73.9a15.6,15.6,0,0,0,19.84-9.64l9.86-28.5A15.6,15.6,0,0,0,74.09,15.92ZM63.51,49.1a15.6,15.6,0,0,1-19.84,9.64L28,53.33A15.6,15.6,0,0,1,18.4,33.49l2.19-6.35A15.6,15.6,0,0,1,40.43,17.5l15.64,5.41a15.6,15.6,0,0,1,9.64,19.84Z"
        />
      </svg>
    </div>
  );
  /*
  return (
    <svg className="bg-svg-holder" viewBox="0 0 893.5 1296">
      <defs>
        <clipPath id="clip-path" transform="translate(208 336)">
          <rect className="bg-shape-1" y="460" width="300" height="308" />
        </clipPath>
        <clipPath id="clip-path-2" transform="translate(208 336)">
          <rect className="bg-shape-1" x="44" width="508" height="160" />
        </clipPath>
        <clipPath id="clip-path-3" transform="translate(208 336)">
          <rect className="bg-shape-1" y="92" width="140" height="200" />
        </clipPath>
      </defs>

      <path
        className="bg-shape-2"
        d="M639.5,396a46,46,0,1,0,46,46A46,46,0,0,0,639.5,396Zm.24,75.25A29.22,29.22,0,1,1,669,442,29.22,29.22,0,0,1,639.74,471.25Z"
        transform="translate(208 336)"
      />

      <path
        className="bg-shape-4"
        d="M22.5,499C-104.8,499-208,602.2-208,729.5S-104.8,960,22.5,960,253,856.8,253,729.5,149.8,499,22.5,499Zm1.23,377.09A146.43,146.43,0,1,1,170.15,729.66,146.43,146.43,0,0,1,23.73,876.09Z"
        transform="translate(208 336)"
      />

      <path
        className="bg-shape-5"
        d="M558.22,160.15,514.7,145.09a15.59,15.59,0,0,0-19.84,9.64L485,183.22a15.59,15.59,0,0,0,9.64,19.84l43.52,15.06A15.59,15.59,0,0,0,558,208.48L567.86,180A15.6,15.6,0,0,0,558.22,160.15Zm-10.57,33.17A15.6,15.6,0,0,1,527.81,203l-15.64-5.41a15.6,15.6,0,0,1-9.64-19.84l2.2-6.34a15.59,15.59,0,0,1,19.84-9.64l15.63,5.41A15.59,15.59,0,0,1,549.84,187Z"
        transform="translate(208 336)"
      />

      <path
        className="bg-shape-7"
        d="M304-336C169.24-336,60-226.76,60-92S169.24,152,304,152,548,42.76,548-92,438.76-336,304-336Zm1.3,399.17a155,155,0,0,1-155-155,155,155,0,0,1,155-155,155,155,0,0,1,155,155A155,155,0,0,1,305.3,63.17Z"
        transform="translate(208 336)"
      />

      <path
        className="bg-shape-9"
        d="M33.13,109.87l-97,44.78a36.18,36.18,0,0,0-17.67,48l29.32,63.47a36.17,36.17,0,0,0,48,17.67l97-44.78a36.17,36.17,0,0,0,17.67-48L81.14,127.54A36.17,36.17,0,0,0,33.13,109.87Zm35.65,72.45a36.17,36.17,0,0,1-17.67,48L16.28,246.41a36.16,36.16,0,0,1-48-17.67l-6.53-14.13a36.17,36.17,0,0,1,17.67-48l34.82-16.09a36.18,36.18,0,0,1,48,17.67Z"
        transform="translate(208 336)"
      />
    </svg>
  );*/
}

export default BackgroundSvgs;
