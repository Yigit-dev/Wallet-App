import * as React from 'react'

function SvgShrink(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 28 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M28 3.456H0V.768h28v2.688z" fill="#081C81" />
    </svg>
  )
}

export default SvgShrink
