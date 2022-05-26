import React from 'react';

import { SVGIconProps } from './types';

export default function CloseIcon({ onClick, className }: SVGIconProps) {
  return (
    <svg
      className={className}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        clipRule="evenodd"
        d="M16.7071 7.29289C17.0976 7.68342 17.0976 8.31658 16.7071 8.70711L8.70711 16.7071C8.31658 17.0976 7.68342 17.0976 7.29289 16.7071C6.90237 16.3166 6.90237 15.6834 7.29289 15.2929L15.2929 7.29289C15.6834 6.90237 16.3166 6.90237 16.7071 7.29289Z"
        fill="white"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M7.29289 7.29289C7.68342 6.90237 8.31658 6.90237 8.70711 7.29289L16.7071 15.2929C17.0976 15.6834 17.0976 16.3166 16.7071 16.7071C16.3166 17.0976 15.6834 17.0976 15.2929 16.7071L7.29289 8.70711C6.90237 8.31658 6.90237 7.68342 7.29289 7.29289Z"
        fill="white"
        fillRule="evenodd"
      />
    </svg>
  );
}
