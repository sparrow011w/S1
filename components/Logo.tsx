
import React from 'react';

const Logo: React.FC<{ className?: string; color?: string }> = ({ className = "h-8 w-8", color = "currentColor" }) => {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="1" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M4 16c2.5-1.5 5.5-2 8-1 2.5 1 5 3 8 3" />
      <path d="M4 16c-1-1.5-1-4 0-6 1-2.5 3-4.5 5.5-5.5 2.5-1 5-1 7.5 0s5 3.5 6 6c.5 1 1 2 1 3" />
      <path d="M12 15s1-4 3-6c2-2 5-3 5-3" />
      <path d="M21 11c1 0 2 .5 2 1.5s-1 1.5-2 1.5" />
      <path d="M10 20c.5-1 1.5-2 3-2.5" />
    </svg>
  );
};

export default Logo;
