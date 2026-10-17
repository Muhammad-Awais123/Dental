import React from 'react';

/**
 * Clean Vector Molar Tooth Icon (Replaces 🦷 emoji)
 * Supports custom sizes, colors, and stroke/fill styling.
 */
export default function ToothIcon({
  className = "w-5 h-5",
  fill = "currentColor",
  stroke = "none",
  ...props
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={fill}
      stroke={stroke}
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block flex-shrink-0 transition-transform duration-300 ${className}`}
      {...props}
    >
      <path
        d="M12 2C8.5 2 6 4.3 6 8.5C6 11.5 7.2 14.5 8.2 18C8.9 20.3 10 20.8 11.1 19.5C11.7 18.7 12 16.5 12 16.5C12 16.5 12.3 18.7 12.9 19.5C14 20.8 15.1 20.3 15.8 18C16.8 14.5 18 11.5 18 8.5C18 4.3 15.5 2 12 2ZM10.5 8.5C9.7 8.5 9 7.8 9 7C9 6.2 9.7 5.5 10.5 5.5C11.3 5.5 12 6.2 12 7C12 7.8 11.3 8.5 10.5 8.5Z"
      />
    </svg>
  );
}
