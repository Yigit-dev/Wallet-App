import * as React from 'react'

function SvgX(props) {
  return (
    <svg
      width="1em"
      height="1em"
      fontSize={props.size}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22.0465 14.9755H7.9044"
        stroke={props.color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.9755 7.90442V22.0466"
        stroke={props.color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default SvgX
