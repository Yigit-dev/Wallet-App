import * as React from 'react'

function SvgVisaLogo(props) {
  return (
    <svg
      width="1em"
      height="1em"
      fontSize={props.size}
      viewBox="0 0 130 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.436 42.035h-11.22l-8.414-32.1c-.4-1.476-1.247-2.781-2.494-3.396C7.195 4.993 3.765 3.762.023 3.14V1.906h18.075a4.71 4.71 0 014.677 4.012l4.366 23.154L38.356 1.906h10.908L32.436 42.035zm23.065 0H44.904l8.725-40.13h10.597l-8.725 40.13zm22.435-29.012c.311-2.162 2.182-3.398 4.365-3.398 3.43-.31 7.167.31 10.285 1.851l1.87-8.64C91.34 1.601 87.91.98 84.797.98 74.51.98 67.027 6.538 67.027 14.253c0 5.869 5.301 8.95 9.043 10.807 4.048 1.85 5.607 3.087 5.296 4.938 0 2.776-3.119 4.012-6.231 4.012-3.742 0-7.484-.925-10.909-2.472l-1.87 8.646c3.741 1.54 7.79 2.161 11.531 2.161 11.532.305 18.699-5.248 18.699-13.583 0-10.497-14.65-11.112-14.65-15.74zm51.735 29.012l-8.414-40.13h-9.037c-1.871 0-3.742 1.236-4.366 3.088l-15.58 37.042h10.908l2.178-5.863h13.403l1.247 5.863h9.661zm-15.892-29.323l3.113 15.124h-8.726l5.613-15.124z"
        fill={props.color}
      />
    </svg>
  )
}

export default SvgVisaLogo
