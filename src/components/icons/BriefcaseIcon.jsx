const BriefcaseIcon = ({ size = 40, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="7" width="18" height="12" rx="2" stroke={color} strokeWidth="2"/>
    <path d="M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7" stroke={color} strokeWidth="2"/>
    <path d="M3 12H21" stroke={color} strokeWidth="2"/>
    <path d="M12 12V16" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export default BriefcaseIcon;
