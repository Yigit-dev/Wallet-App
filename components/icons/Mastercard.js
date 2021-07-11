import * as React from 'react'

function SvgMastercard(props) {
  return (
    <svg
      width="1em"
      height="1em"
      fontSize={props.size}
      viewBox="0 0 40 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M24.784 21.545H14.23V2.58h10.553v18.965z" fill="#FF5F00" />
      <path
        d="M14.907 12.061a12.04 12.04 0 014.606-9.482A12.008 12.008 0 0012.06 0C5.4 0 0 5.4 0 12.061c0 6.662 5.4 12.062 12.06 12.062 2.813 0 5.402-.964 7.453-2.58a12.04 12.04 0 01-4.606-9.482z"
        fill="#EB001B"
      />
      <path
        d="M39.016 12.061c0 6.662-5.4 12.062-12.06 12.062-2.814 0-5.402-.964-7.454-2.58a12.04 12.04 0 004.607-9.482 12.04 12.04 0 00-4.607-9.482A12.012 12.012 0 0126.956 0c6.66 0 12.06 5.4 12.06 12.061z"
        fill="#F79E1B"
      />
    </svg>
  )
}

export default SvgMastercard
