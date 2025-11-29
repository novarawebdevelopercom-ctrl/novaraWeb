import * as React from 'react';
import type { SVGProps } from 'react';

const SmsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17 21H7C4 21 2 19.5 2 16V9C2 5.5 4 4 7 4H17C20 4 22 5.5 22 9V16C22 19.5 20 21 17 21Z"
      fill="white"
      stroke="#108554"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M17 9.5L13.87 12C12.84 12.82 11.15 12.82 10.12 12L7 9.5" fill="white" />
    <path
      d="M17 9.5L13.87 12C12.84 12.82 11.15 12.82 10.12 12L7 9.5"
      stroke="#108554"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SmsIcon;
