const ChartIcon = ({ size = 40, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="18" rx="2" stroke={color} strokeWidth="2"/>
    <path d="M7 17V13M12 17V9M17 17V11" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M7 10L10 7L14 11L17 8" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="7" cy="10" r="1.5" fill={color}/>
    <circle cx="10" cy="7" r="1.5" fill={color}/>
    <circle cx="14" cy="11" r="1.5" fill={color}/>
    <circle cx="17" cy="8" r="1.5" fill={color}/>
  </svg>
);

export default ChartIcon;
