import React from "react";
import "./svgBackground.css";

export const SvgBackground = () => {
  return (
    <svg
      className="svgBackgroundWrapper"
      width="device-width"
      height="auto"
      version="1.1"
      viewBox="0 0 362 200"
      preserveAspectRatio="xMidYMin slice"
    >
      <g className="background">
        <rect
          id="gradient-sky-container"
          transform="translate(.50197 -92.294)"
          x=".06"
          y="93.339"
          width="362"
          height="174.77"
          ry="0"
          fill="url(#i)"
          opacity=".94"
        />
        <defs id="gradient-sky">
          <filter
            id="h"
            x="-.007"
            y="-.048"
            width="1.014"
            height="1.096"
            color-interpolation-filters="sRGB"
          >
            <feGaussianBlur stdDeviation=".02" />
          </filter>
          <filter
            id="g"
            x="-.007"
            y="-.048"
            width="1.014"
            height="1.096"
            color-interpolation-filters="sRGB"
          >
            <feGaussianBlur stdDeviation=".02" />
          </filter>
          <filter
            id="f"
            x="-.007"
            y="-.048"
            width="1.014"
            height="1.096"
            color-interpolation-filters="sRGB"
          >
            <feGaussianBlur stdDeviation=".02" />
          </filter>
          <filter
            id="a"
            x="-.007"
            y="-.048"
            width="1.014"
            height="1.096"
            color-interpolation-filters="sRGB"
          >
            <feGaussianBlur stdDeviation=".02" />
          </filter>
          <linearGradient
            id="i"
            x1="173.44"
            x2="175.62"
            y1="252.67"
            y2="75.199"
            gradientTransform="matrix(.99533 0 0 .99644 .919 .331)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#b6dcff" offset="0" />
            <stop stop-color="#b6dcff" stop-opacity="0" offset="1" />
          </linearGradient>
        </defs>
        <path
          id="hills-right"
          transform="translate(.50197 -92.294)"
          d="m361.72 248.93a99.355 49.55 0 0 0-99.235 49.35l99.354 0.2z"
          fill="#239240"
          opacity=".88"
          stroke="#ef4136"
          stroke-opacity=".018"
          stroke-width=".333"
        />
        <g
          id="hills-left"
          fill="#239240"
          stroke="#ef4136"
          stroke-opacity=".018"
        >
          <path
            transform="translate(.50197 -92.294)"
            d="m169.14 286.13a35.182 47.454 0 0 0-36.629-42.272 35.182 47.454 0 0 0-33.524 46.724"
            opacity=".88"
            stroke-width=".194"
          />
          <path
            transform="translate(.50197 -92.294)"
            d="m124.95 271.07a62.49 49.62 0 0 0-63.262-48.144 62.49 49.62 0 0 0-61.689 49.415"
            opacity=".88"
            stroke-width=".265"
          />
          <path
            transform="translate(.50197 -92.294)"
            d="m149.04 292.32a62.49 49.62 0 0 0-62.043-49.618 62.49 49.62 0 0 0-62.93 48.908"
            opacity=".95"
            stroke-width=".265"
          />
        </g>
        <path
          id="sun"
          transform="translate(.50197 -92.294)"
          d="m68.96 123.81a19.243 19.243 0 0 1-18.847 19.239 19.243 19.243 0 0 1-19.623-18.449 19.243 19.243 0 0 1 18.04-19.998 19.243 19.243 0 0 1 20.366 17.624"
          fill="#fffb38"
        />
      </g>
      <g className="water">
        <g id="waves">
          <path
            transform="translate(.50197 -92.294)"
            d="m0 298.51h361.8v-30.406h-361.8z"
            fill="#0057b8"
          />
          <path
            transform="translate(.50197 -92.294)"
            d="m0 298.51h361.34v-18.646h-361.34z"
            fill="#315fb2"
          />
        </g>
        <g id="main" transform="translate(.50197 -92.294)" fill="#6692e1">
          <rect
            x="25.658"
            y="285.19"
            width="25.123"
            height="6.414"
            ry="3.207"
          />
          <rect
            transform="scale(1,-1)"
            x="46.937"
            y="-282.38"
            width="25.123"
            height="5"
            ry="2.5"
          />
          <ellipse cx="39.988" cy="279.84" rx="2.673" ry="2.138" />
          <ellipse cx="120.17" cy="292.13" rx="2.673" ry="2.138" />
          <ellipse cx="128.19" cy="292.13" rx="2.673" ry="2.138" />
          <rect
            transform="scale(1,-1)"
            x="125.51"
            y="-287.73"
            width="25.123"
            height="5"
            ry="2.5"
          />
          <rect x="289.19" y="285.73" width="20" height="6.414" ry="3.207" />
          <rect
            transform="scale(1,-1)"
            x="256.65"
            y="-282.55"
            width="25.123"
            height="5"
            ry="2.5"
          />
          <ellipse cx="196.08" cy="277.16" rx="2.673" ry="2.138" />
          <ellipse cx="339.87" cy="288.92" rx="2.673" ry="2.138" />
        </g>
      </g>
      <g className="clouds-back" fill="#fff">
        <g id="cloud-1" transform="translate(1.037 -100.31)">
          <ellipse cx="33.617" cy="199.18" rx="13.898" ry="12.829" />
          <ellipse cx="42.704" cy="208.27" rx="16.036" ry="14.967" />
          <ellipse cx="20.521" cy="209.6" rx="18.976" ry="15.234" />
        </g>
        <g id="cloud-2" transform="matrix(1.2136 0 0 .9417 -47.932 -89.956)">
          <ellipse cx="142.95" cy="235.4" rx="11.602" ry="11.901" />
          <ellipse cx="158.65" cy="239.99" rx="8.032" ry="9.658" />
          <ellipse cx="131.04" cy="243.65" rx="11.897" ry="10.03" />
          <ellipse cx="146.33" cy="248.77" rx="13.387" ry="11.405" />
        </g>
        <g id="cloud-3" transform="rotate(5.76 1274.5 386.33)">
          <ellipse cx="301.17" cy="159.5" rx="11.602" ry="11.901" />
          <ellipse cx="316.88" cy="164.09" rx="8.032" ry="9.658" />
          <ellipse cx="289.26" cy="167.75" rx="11.897" ry="10.03" />
          <ellipse cx="302.62" cy="167.22" rx="11.897" ry="10.03" />
        </g>
      </g>
      <g className="toronto">
        <g className="cn-tower">
          <g id="body" stroke-width="1.2357">
            <path
              d="m222.72 174.7c4e-3 -0.12956-2.62-1.9245-1.6231-5.8018 3.4977-13.586-1.6036-13.081 0.0609-26.774 1.6594-13.66 1.0099-30.496 0.67932-50.357l-0.50689-30.529 5.183 0.22143c1.8746 20.339 1.9952 40.377 3.3564 59.335 1.8266 25.422 2.3283 41.444 4.9613 55.133-1.5842-0.72906-20.742 1.1201-12.111-1.2284z"
              fill="#9499a3"
            />
            <path
              d="m222.91 174.7c-4e-3 -0.12956 2.8832-1.9245 1.7851-5.8018-3.8477-13.586 1.7644-13.081-0.0661-26.774-1.8279-13.66-1.111-30.496-0.74802-50.357l0.55745-30.529-5.7016 0.22143c-2.0639 20.339-2.1948 40.377-3.6947 59.334-2.0094 25.423-2.5617 41.447-5.4578 55.135 1.7424-0.73023 22.824 1.1189 13.326-1.2296z"
              fill="#9499a3"
            />
            <rect
              x="220.89"
              y="61.229"
              width="3.1788"
              height="114.49"
              ry="0"
              fill="#babec4"
            />
          </g>
          <g id="center">
            <rect
              transform="matrix(1.2964 0 0 1.1778 173.81 -468.68)"
              x="29.799"
              y="448.28"
              width="15.937"
              height="3.476"
              ry="1.738"
              fill="#babec4"
            />
            <path
              transform="matrix(1.2964 0 0 1.1778 173.81 -468.68)"
              d="m29.81 446.48 15.495-0.097-2.398 2.13h-10.547z"
              fill="#b8bcc2"
            />
            <rect
              x="211.83"
              y="49.372"
              width="21.278"
              height="8.9925"
              rx="3.5832"
              ry="2.9198"
              fill="#babec4"
              stroke-width="1.2357"
            />
            <path
              d="m212.4 50.675 20.15 0.02356-2.7548-2.5181h-14.553z"
              fill="#ced1d5"
              stroke-width="1.2357"
            />
            <rect
              transform="scale(1,-1)"
              x="211.83"
              y="-55.884"
              width="21.252"
              height=".89866"
              rx="0"
              ry="0"
              fill="#6d757f"
              stroke-width="1.2357"
            />
            <rect
              transform="scale(1,-1)"
              x="211.8"
              y="-54.301"
              width="21.273"
              height="2.1778"
              rx="0"
              ry="0"
              fill="#6d757f"
              stroke-width="1.2357"
            />
            <rect
              transform="matrix(1.2964 0 0 1.1778 173.81 -468.68)"
              x="31.959"
              y="436.56"
              width="11.088"
              height="2.276"
              ry="0"
              fill="#9ba0a9"
            />
            <rect
              transform="matrix(1.2964 0 0 1.1778 173.81 -468.68)"
              x="31.959"
              y="437.49"
              width="11.088"
              height=".553"
              ry="0"
              fill="#b70000"
            />
          </g>
          <g id="tip">
            <rect
              transform="matrix(1.2964 0 0 1.1778 173.81 -468.68)"
              x="36.167"
              y="418.57"
              width="2.452"
              height="18.263"
              ry="0"
              fill="#9499a3"
            />
            <rect
              transform="matrix(1.2964 0 0 1.1778 173.81 -468.68)"
              x="36.582"
              y="417.59"
              width="1.623"
              height=".982"
              ry="0"
              fill="#b70000"
            />
            <rect
              transform="matrix(1.2964 0 0 1.1778 173.81 -468.68)"
              x="36.582"
              y="412.32"
              width="1.596"
              height="6.256"
              ry="0"
              fill="#9499a3"
            />
            <rect
              transform="matrix(1.2964 0 0 1.1778 173.81 -468.68)"
              x="36.878"
              y="401.29"
              width="1.006"
              height="6.266"
              ry="0"
              fill="#b70000"
            />
            <rect
              transform="matrix(1.2964 0 0 1.1778 173.81 -468.68)"
              x="36.878"
              y="406.05"
              width="1.006"
              height="6.266"
              ry="0"
              fill="#9499a3"
            />
          </g>
        </g>
        <g className="skydome">
          <path
            d="m211.3 175.42a33.409 34.21 0 0 0-33.238-34.21 33.409 34.21 0 0 0-33.578 33.86"
            fill="#cdcfd5"
          />
          <path
            d="m204.38 173.76a26.994 25.658 0 0 0-26.856-25.658 26.994 25.658 0 0 0-27.13 25.396"
            fill="#a7acb3"
          />
          <path d="m136.05 167.25h75.12v8.684h-75.12z" fill="#bcc0c7" />
        </g>
      </g>
      <g className="bridge">
        <g id="lines-back">
          <path
            transform="translate(.50197 -92.294)"
            d="m101.08 178.13h-1.537v55.256h1.537z"
            fill="#cd2c22"
            fill-opacity=".941"
          />
          <path
            transform="translate(.50197 -92.294)"
            d="m163.71 226.6h-1.742v6.762h1.742z"
            fill="#cd2c22"
            fill-opacity=".941"
          />
          <rect
            transform="matrix(-1 0 0 1 .50197 -92.294)"
            x="-90.321"
            y="160.03"
            width="1.488"
            height="73.317"
            ry="0"
            fill="#cd2c22"
            fill-opacity=".941"
          />
          <path
            transform="translate(.50197 -92.294)"
            d="m175.62 225.51h-1.733v7.822h1.733z"
            fill="#cd2c22"
            fill-opacity=".941"
          />
          <path
            transform="translate(.50197 -92.294)"
            d="m359.36 227.63h1.928v5.762h-1.928z"
            fill="#cd2c22"
            fill-opacity=".941"
          />
          <path
            transform="translate(.50197 -92.294)"
            d="m125.7 209.11h-1.645v24.224h1.645zm25.368 16.437h-1.733v7.822h1.733zm-12.871-6.528h-1.693v14.3h1.693zm-24.999-23.916h-1.589v38.234h1.589z"
            fill="#cd2c22"
            fill-opacity=".941"
          />
          <rect
            x="71.665"
            y="67.993"
            width="1.489"
            height="73.051"
            ry="0"
            fill="#cd2c22"
            fill-opacity=".941"
          />
          <path
            d="m36.283 118.68h1.647v22.351h-1.647zm-25.369 14.838h1.735v7.557h-1.735zm12.872-5.649h1.695v13.187h-1.695zm24.999-23.382h1.589v36.611h-1.589zm12.121-17.538h1.538v54.075h-1.538z"
            fill="#cd2c22"
            fill-opacity=".941"
          />
          <path
            transform="translate(.50197 -92.294)"
            d="m189.11 218.55h-1.694v14.77h1.694z"
            fill="#cd2c22"
            fill-opacity=".941"
          />
          <path
            transform="translate(.50197 -92.294)"
            d="m284.06 190.83h1.793v42.447h-1.793zm12.7 11.296h1.793v31.203h-1.793zm12.734 8.7417h1.828l-0.0887 22.483h-1.828zm13.035 7.6197h1.839l-0.0887 14.888h-1.839zm11.79 4.7166h1.894l0.0887 10.136h-1.894zm12.749 3.061h1.919v6.978h-1.919z"
            fill="#cd2c22"
            fill-opacity=".941"
          />
          <path
            transform="translate(.50197 -92.294)"
            d="m200.66 208.44h1.732v24.882h-1.732zm34.241-48.101h1.693v72.977h-1.693zm-10.753 17.669h1.732v55.317h-1.732zm-11.582 16.765h1.733v38.54h-1.733zm40.121-40.005h1.645v78.563h-1.645z"
            fill="#cd2c22"
            fill-opacity=".941"
          />
          <path
            d="m361.78 135.33c-41.826 0.16335-81.9-34.908-113.79-80.915"
            fill="#f00"
            fill-opacity=".009"
            fill-rule="evenodd"
            stroke="#cd2c22"
            stroke-width="1.6222"
          />
          <path
            d="m0.53227 134.09c29.696 3.1425 58.47-35.12 81.057-85.367"
            fill="none"
            stroke="#cd2c22"
            stroke-width="1.3809"
          />
          <path
            d="m160.56 134.15c30.797 3.0456 60.638-34.037 84.063-82.733"
            fill="#f00"
            fill-opacity=".009"
            fill-rule="evenodd"
            stroke="#cd2c22"
            stroke-width="1.3844"
          />
          <path
            d="m162.62 134.31c-29.71 0.16734-58.175-35.761-80.826-82.892"
            fill="#f00"
            fill-opacity=".009"
            fill-rule="evenodd"
            stroke="#cd2c22"
            stroke-width="1.3838"
          />
        </g>
        <g className="poles">
          <g id="left">
            <path
              transform="translate(.50197 -92.294)"
              d="m76.942 235.77h8.553v-23.815h-8.553zm0.529-23.815h7.5v-23.815h-7.5zm0.5-23.815h6.5v-23.815h-6.5z"
              fill="#cd2c22"
            />
            <path d="m241.63 170.57h8.553v-25.658h-8.553z" fill="#cd2c22" />
            <path d="m77.47 170.81h8.553v-25.658h-8.553z" fill="#cd2c22" />
            <path
              transform="translate(.50197 -92.294)"
              d="m78.442 164.33h5.5v-23.815h-5.5z"
              fill="#cd2c22"
            />
            <path
              d="m241.6 142.04h8.553v-23.815h-8.553zm0.529-23.815h7.5v-23.815h-7.5z"
              fill="#cd2c22"
            />
            <path
              d="m242.63 94.416h6.5v-23.816h-6.5zm0.471-23.816h5.5v-23.814h-5.5z"
              fill="#cd2c22"
            />
            <path
              transform="translate(.50197 -92.294)"
              d="m241.16 237.46h8.5v1.3h-8.5z"
              fill="#a93831"
            />
            <path d="m75.857 143.77h11.635v-1.56h-11.635z" fill="#cd2c22" />
            <path d="m76.64 145.41h10.124v-1.892h-10.124z" fill="#cd2c22" />
            <path
              transform="translate(.50197 -92.294)"
              d="m75.327 265.82h11.76v-6.281h-11.76z"
              fill="#cd2c22"
            />
            <path
              transform="translate(.50197 -92.294)"
              d="m239.48 265.58h11.76v-6.281h-11.76z"
              fill="#cd2c22"
            />
            <path d="m240.01 143.53h11.636v-1.56h-11.636z" fill="#c43b32" />
            <path d="m240.8 145.17h10.124v-1.892h-10.124z" fill="#c43b32" />
            <path
              transform="translate(.50197 -92.294)"
              d="m76.999 237.7h8.5v1.3h-8.5z"
              fill="#a93831"
            />
          </g>
          <path
            id="vertical"
            transform="translate(.50197 -92.294)"
            d="m0.072 233.31h361.54v4.183h-361.54z"
            fill="#b90000"
            stroke="#fff"
            stroke-opacity=".059"
            stroke-width=".221"
          />
          <g id="between-poles" fill="#cd2c22">
            <path
              transform="translate(.50197 -92.294)"
              d="m84.8 194.73h16.22v-5h-16.22z"
            />
            <path
              transform="translate(.50197 -92.294)"
              d="m83.413 146.71h18.8v-5h-18.8zm1.058 24.201h17.1v-5h-17.1z"
            />
            <path
              transform="translate(.50197 -92.294)"
              d="m84.966 218.02h15.55v-5h-15.55zm162.52-71.301h18.8v-5h-18.8zm1.059 24.201h17.1v-5h-17.1zm0.328 23.815h16.22v-5h-16.22zm0.166 22.285h15.55v-5h-15.55z"
            />
          </g>
          <g id="right">
            <path d="m101.03 170.81h8.553v-25.658h-8.553z" fill="#ef4136" />
            <path
              d="m101.01 143.48h8.553v-23.815h-8.553zm0.529-23.815h7.5v-23.815h-7.5z"
              fill="#ef4136"
            />
            <path
              d="m102.04 95.849h6.5v-23.815h-6.5zm0.471-23.815h5.5v-23.815h-5.5z"
              fill="#ef4136"
            />
            <path
              d="m265.16 142.04h8.553v-23.815h-8.553zm0.528-23.815h7.5v-23.815h-7.5z"
              fill="#ef4136"
            />
            <path
              d="m266.19 94.416h6.5v-23.816h-6.5zm0.472-23.816h5.5v-23.814h-5.5z"
              fill="#ef4136"
            />
            <path d="m265.19 170.57h8.553v-25.659h-8.553z" fill="#ef4136" />
            <path d="m263.57 173.04h11.76v-6.281h-11.76z" fill="#ef4136" />
            <path d="m263.58 143.29h11.636v-1.79h-11.636z" fill="#ef4136" />
            <path d="m264.36 145.17h10.124v-2.172h-10.124z" fill="#ef4136" />
            <path d="m99.42 143.34h11.636v-1.975h-11.636z" fill="#ef4136" />
            <path d="m100.2 145.41h10.125v-2.395h-10.125z" fill="#ef4136" />
            <path
              transform="translate(.50197 -92.294)"
              d="m98.89 265.82h11.76v-6.281h-11.76z"
              fill="#ef4136"
            />
            <path
              transform="translate(.50197 -92.294)"
              d="m264.72 237.46h8.5v1.3h-8.5z"
              fill="#c43b32"
            />
            <path
              transform="translate(.50197 -92.294)"
              d="m100.56 237.7h8.5v1.3h-8.5z"
              fill="#c43b32"
            />
          </g>
        </g>
        <g
          id="lines-front"
          transform="translate(.50197 -92.294)"
          fill="#ef4136"
        >
          <path d="m66.705 195.08h-1.589v38.234h1.589zm-10.673 9.738h-1.624v28.514h1.624zm-12.273 9.467h-1.667v19.069h1.667zm-12.409 6.662h-1.705v12.358h1.705zm-12.814 4.262h-1.735v8.112h1.735zm-13.02 2.062h-1.753v6.059h1.753zm75.831-49.309h-1.537v55.38h1.537zm13.215-20.436h1.52v75.875h-1.52z" />
          <path
            d="m230.85 202.38h-1.587v30.946h1.587zm-10.673 10.326h-1.623v20.642h1.623zm-12.272 9.057h-1.668v11.589h1.668zm37.587-38.102h-1.536v49.649h1.536zm13.216-24.165h1.52v73.831h-1.52zm44.756 35.265h1.589v38.529h-1.589zm12.79 12.514h1.624v26.033h-1.624zm12.273 8.454h1.667v17.6h-1.667zm-37.606-37.318h1.571v54.85h-1.571zm-13.073-18.97h1.52v73.831h-1.52zm63.505 63.822h1.717v10.135h-1.717zm12.281 3.195h1.743v6.867h-1.743z"
            fill="#ef4136"
          />
          <path
            d="m-0.46696 227.14c38.392 3.1057 75.594-34.709 104.8-84.366"
            fill="none"
            stroke="#ef4136"
            stroke-width="1.5609"
          />
          <path
            d="m130.47 187.52h1.589v45.814h-1.589zm12.789 15.624h1.624v30.208h-1.624zm12.274 11.16h1.667v19.069h-1.667zm12.409 7.789h1.705v11.232h-1.705zm12.813 3.135h1.735v8.112h-1.735zm13.021 1.077h1.753v7.044h-1.753zm-75.832-59.392h1.537v66.448h-1.537z"
            fill="#ef4136"
          />
          <path
            d="m184.08 226.28c30.839 3.115 60.721-34.813 84.178-84.62"
            fill="#f00"
            fill-opacity=".009"
            fill-rule="evenodd"
            stroke="#ef4136"
            stroke-width="1.401"
          />
          <path
            d="m186.14 226.44c-29.751 0.17116-58.255-36.576-80.937-84.782"
            fill="#f00"
            fill-opacity=".009"
            fill-rule="evenodd"
            stroke="#ef4136"
            stroke-width="1.4005"
          />
          <path
            d="m361.28 226.57c-34.121 0.17186-66.812-36.726-92.825-85.13"
            fill="#f00"
            fill-opacity=".009"
            fill-rule="evenodd"
            stroke="#ef4136"
            stroke-width="1.5029"
          />
        </g>
        <g id="tips">
          <path
            transform="translate(.50197 -92.294)"
            d="m102.22 138.7h5v-1.2h-5z"
            fill="#ef4136"
          />
          <path
            d="m245.82 40.02 0.755 2.479 0.57 2.707-1.327 0.237-1.323-0.237 0.573-2.716z"
            fill="#dd3e34"
          />
          <path
            transform="translate(.50197 -92.294)"
            d="m78.62 138.7h5v-1.2h-5z"
            fill="#dd3e34"
          />
          <rect
            transform="matrix(.53004 0 0 .16971 51.069 24.326)"
            x="95.988"
            y="129.97"
            width="12.292"
            height="10.827"
            ry="1.634"
            fill="#c90000"
            filter="url(#h)"
          />
          <rect
            transform="matrix(.53004 0 0 .16971 27.469 24.326)"
            x="95.988"
            y="129.97"
            width="12.292"
            height="10.827"
            ry="1.634"
            fill="#cd2c22"
            filter="url(#f)"
          />
          <path d="m243.31 46.406h5v-1.2h-5z" fill="#dd3e34" />
          <rect
            transform="matrix(.53004 0 0 .16971 191.66 24.326)"
            x="95.988"
            y="129.97"
            width="12.292"
            height="10.827"
            ry="1.634"
            fill="#cd2c22"
            filter="url(#a)"
          />
          <path
            transform="translate(.50197 -92.294)"
            d="m81.125 132.31 0.755 2.479 0.57 2.707-1.327 0.237-1.323-0.237 0.573-2.716z"
            fill="#dd3e34"
          />
          <path
            d="m269.49 40.02 0.755 2.48 0.57 2.706-1.327 0.237-1.323-0.237 0.573-2.716z"
            fill="#ef4136"
          />
          <path d="m266.98 46.406h5v-1.2h-5z" fill="#ef4136" />
          <rect
            transform="matrix(.53004 0 0 .16971 215.33 24.326)"
            x="95.988"
            y="129.97"
            width="12.292"
            height="10.827"
            ry="1.634"
            fill="#c90000"
            filter="url(#g)"
          />
          <path
            transform="translate(.50197 -92.294)"
            d="m104.72 132.31 0.755 2.48 0.57 2.706-1.327 0.237-1.323-0.237 0.573-2.716z"
            fill="#ef4136"
          />
        </g>
        <g id="foot">
          <path
            transform="translate(.50197 -92.294)"
            d="m95.623 272.26h18.271v-1.747h-18.271z"
            fill="#b08042"
          />
          <path
            transform="translate(.50197 -92.294)"
            d="m72.06 272.26h18.271v-1.747h-18.271z"
            fill="#c4996c"
          />
          <path
            transform="translate(.50197 -92.294)"
            d="m236.22 272.02h18.271v-1.747h-18.271z"
            fill="#bd8d4f"
          />
          <path
            transform="translate(.50197 -92.294)"
            d="m237.3 270.8h16.133v-7.36h-16.133z"
            fill="#b07c47"
          />
          <path
            transform="translate(.50197 -92.294)"
            d="m73.14 271.04h16.133v-7.36h-16.133z"
            fill="#b27e47"
          />
          <path
            transform="translate(.50197 -92.294)"
            d="m96.703 271.04h16.133v-7.36h-16.133z"
            fill="#c4996c"
          />
          <path d="m263.57 173.04h13.947v5.22h-13.947z" fill="none" />
          <path d="m261.38 178.26h16.132v-7.36h-16.132z" fill="#c4996c" />
          <path d="m260.3 179.48h18.27v-1.747h-18.27z" fill="#b08042" />
        </g>
      </g>
      <g className="clouds-front" fill="#fff">
        <g id="cloud-1" transform="translate(-1.07,-92.73)">
          <ellipse
            transform="matrix(.99625 -.08657 -.1163 -.99321 0 0)"
            cx="190.35"
            cy="-183.23"
            rx="8.022"
            ry="8.334"
          />
          <ellipse
            transform="matrix(.99495 -.10036 -.10036 -.99495 0 0)"
            cx="165.52"
            cy="-183.51"
            rx="11.897"
            ry="10.03"
          />
          <ellipse
            transform="matrix(.99383 -.11091 -.0908 -.99587 0 0)"
            cx="180.63"
            cy="-186.51"
            rx="11.911"
            ry="11.086"
          />
        </g>
        <g
          id="cloud-2"
          transform="matrix(1.2621 .10757 -.12731 1.0664 -49.756 -64.032)"
        >
          <ellipse cx="301.17" cy="159.5" rx="11.602" ry="11.901" />
          <ellipse cx="316.88" cy="164.09" rx="8.032" ry="9.658" />
          <ellipse cx="289.26" cy="167.75" rx="11.897" ry="10.03" />
          <ellipse cx="302.62" cy="167.22" rx="11.897" ry="10.03" />
        </g>
      </g>
    </svg>
  );
};
