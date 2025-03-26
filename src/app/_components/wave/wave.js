import styles from "./wave.module.css";
import * as motion from "motion/react-client";

const Wave = () => (
  <motion.svg
    initial={{transform: 'rotate3d(1, 1, 1, 0deg)'}}
    animate={{top: '-1.2rem', transform: 'rotate3d(1, 1, 1, 2deg)' }}
    transition={{
      duration: 2,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: "linear"
    }}
    className={styles.wave_vector}
    width="977"
    height="561"
    viewBox="0 0 977 561"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_11_355)">
      <path
        d="M37.4089 -5.4044L64.391 6.36672C91.2613 18.2337 145.225 41.776 199.221 63.5454C253.224 85.211 307.473 105.016 363.164 104.568C418.855 104.121 476.196 83.4371 531.292 90.776C586.389 98.1148 639.45 133.492 694.15 146.022C748.851 158.552 805.399 148.25 860.614 154.031C915.83 159.813 969.921 181.694 996.862 192.627L1023.91 203.567L1039.44 0.0856746L1011.72 -2.03046C984.108 -4.13867 928.669 -8.37093 873.335 -12.5953C818 -16.8196 762.562 -21.0519 707.228 -25.2762C651.893 -29.5006 596.455 -33.7328 541.12 -37.9572C485.786 -42.1815 430.347 -46.4138 375.013 -50.6381C319.678 -54.8624 264.24 -59.0947 208.906 -63.3191C153.571 -67.5434 98.1328 -71.7757 70.5175 -73.8839L42.7983 -76L37.4089 -5.4044Z"
        fill="#007AFF"
      />
    </g>
    <defs>
      <clipPath id="clip0_11_355">
        <rect
          width="999.544"
          height="562.243"
          fill="white"
          transform="translate(42.7983 -76) rotate(4.3656)"
        />
      </clipPath>
    </defs>
  </motion.svg>
);

export default Wave;
