import * as React from 'react'

function SvgWaveBack(props) {
  return (
    <svg
      width="1em"
      height="1em"
      fontSize={props.size}
      viewBox="0 0 375 572"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M148.079 41.332C26.085 41.332-22 268.888-22 268.888L-11.314 572h723.949s375.255-704 74.8-704c-211.041 0-217.274 283.555-355.297 283.555-147.817 0-162.065-110.223-284.059-110.223z"
        fill="#00199A"
      />
    </svg>
  )
}

export default SvgWaveBack
