import React from "react";

function Scrible(props) {
  return (
    <React.Fragment>
      <svg className="scrible-bg" viewBox="0 0 940 768">
        <path d="M2.06,2.05,485.53.85C610-8.8,661.54,66.21,651.24,101.74c-44.63,98.69-14.83,115.88,68,38.5,82.43-42.44,75.48,73.16,68,88.83-20.33,65.8,46.17,72.06,61.82,74,41.22,3.95,32.4,61.36,27.83,68.11,2,22.38,39.59,17.91,46.37,14.8,25.76-2,18.54,28.63,0,32.58-56.4,9.2-44.31,33.56-37.1,56.26,26.43,61.5-49.33,54.64-89.65,41.45-91.71-25.66-67,29.61-24.73,62.19,46.67,45.68-39.16,63.17-67.81,56.11-69.24,6.07-71.3,43.58-55.84,82.07,20.56,34.93-21.51,52.24-34,45.41L0,768Z" />
      </svg>
      <svg className="scrible" viewBox="0 0 912.23 778.08">
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="456.12"
            y1="778.08"
            x2="456.12"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#ec2d87" />
            <stop offset="0.01" stopColor="#eb2d86" />
            <stop offset="0.45" stopColor="#c02977" />
            <stop offset="0.8" stopColor="#a6266e" />
            <stop offset="1" stopColor="#9c256a" />
          </linearGradient>
        </defs>
        <path d="M2,2.08,471.18.86C592-8.92,642,67.08,632,103.08c-43.31,100-14.39,117.4,66,39,80-43,73.25,74.12,66,90-19.73,66.66,44.81,73,60,75,40,4,31.44,62.16,27,69,2,22.68,38.42,18.15,45,15,25-2,18,29,0,33-54.73,9.32-43,34-36,57,25.65,62.31-47.87,55.36-87,42-89-26-65,30-24,63,45.29,46.28-38,64-65.81,56.85C616,649.08,614,687.08,629,726.08c20,35.39-20.87,52.92-33,46l-596,6Z" />
      </svg>
    </React.Fragment>
  );
}

export default Scrible;