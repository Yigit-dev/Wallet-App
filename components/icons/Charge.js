import * as React from 'react'

function SvgCharge(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        opacity={0.5}
        y={10.115}
        width={3}
        height={8.885}
        rx={1.5}
        fill="#fff"
      />
      <rect
        x={6.391}
        y={5.269}
        width={3}
        height={13.731}
        rx={1.5}
        fill="#fff"
      />
      <rect opacity={0.5} x={13} width={3} height={19} rx={1.5} fill="#fff" />
    </svg>
  )
}

export default SvgCharge
