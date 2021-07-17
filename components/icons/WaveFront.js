import * as React from 'react'

function SvgWaveFront(props) {
  return (
    <svg
      width="1em"
      height="1em"
      fontSize={props.size}
      viewBox="0 0 375 586"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity={0.5}
        d="M472.941 90.007C587.03 90.007 632 302.694 632 302.694L622.007 586H-55.035s-350.94-658-69.952-658C72.379-72 78.208 193.027 207.288 193.027c138.239 0 151.564-103.02 265.653-103.02z"
        fill="#001EB4"
      />
    </svg>
  )
}

export default SvgWaveFront
