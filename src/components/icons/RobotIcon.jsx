const RobotIcon = ({ size = 40, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2V4M12 4C10.3431 4 9 5.34315 9 7V8H15V7C15 5.34315 13.6569 4 12 4Z" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <rect x="6" y="8" width="12" height="10" rx="2" stroke={color} strokeWidth="2"/>
    <circle cx="9" cy="12" r="1" fill={color}/>
    <circle cx="15" cy="12" r="1" fill={color}/>
    <path d="M9 15H15" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M6 13H4M20 13H18M18 18V20M6 18V20" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export default RobotIcon;
