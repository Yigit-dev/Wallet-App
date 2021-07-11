import * as React from 'react'

function SvgGrid(props) {
  return (
    <svg
      width="1em"
      height="1em"
      fontSize={props.size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={2} cy={2} r={2} fill={props.color} />
      <circle cx={14} cy={2} r={2} fill={props.color} />
      <circle cx={2} cy={14} r={2} fill={props.color} />
      <circle cx={14} cy={14} r={2} fill={props.color} />
    </svg>
  )
}

export default SvgGrid
