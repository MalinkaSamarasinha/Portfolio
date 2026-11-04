export default function Squiggle({ color = '#D9A5A0', className = '' }) {
  return (
    <svg
      className={`squiggle ${className}`}
      viewBox="0 0 400 500"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M300 40 C390 40 390 140 300 150 C200 165 150 220 240 280 C330 340 370 400 300 470"
        stroke={color}
        strokeWidth="70"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}