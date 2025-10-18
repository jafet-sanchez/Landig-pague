const RocketIcon = ({ size = 40, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L3 10L7 11L8 19L12 15L16 19L17 11L21 10L12 2Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="9" r="2" fill={color}/>
    <path d="M7 21L9 19" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M15 19L17 21" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export default RocketIcon;
