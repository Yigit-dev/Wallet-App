import * as React from 'react'

function SvgEnlarge(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 47 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect opacity={0.5} width={47} height={4} rx={2} fill="#6F8099" />
    </svg>
  )
}

export default SvgEnlarge
