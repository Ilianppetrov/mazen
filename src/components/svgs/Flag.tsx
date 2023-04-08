import { motion } from "framer-motion";

function Flag({ x, y, delay }: { x: number; y: number; delay: number }) {
  return (
    <motion.svg
      width="51"
      height="55"
      viewBox="0 0 51 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      x={x}
      y={y}
    >
      <motion.path
        d="M11.4901 0.80835C12.2332 0.80835 12.9458 1.10352 13.4712 1.62894C13.9966 2.15435 14.2918 2.86696 14.2918 3.61001V6.07547C17.2615 4.84274 21.2959 3.61001 25.4984 3.61001C33.9034 3.61001 33.9034 9.21332 39.5067 9.21332C47.9117 9.21332 50.7133 3.61001 50.7133 3.61001V26.0233C50.7133 26.0233 47.9117 31.6266 39.5067 31.6266C31.1017 31.6266 31.1017 26.0233 25.4984 26.0233C17.0934 26.0233 14.2918 31.6266 14.2918 31.6266V51.2382H8.68848V3.61001C8.68848 2.86696 8.98365 2.15435 9.50906 1.62894C10.0345 1.10352 10.7471 0.80835 11.4901 0.80835Z"
        fill="#FCFCFC"
        initial={{ scale: 0, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        transition={{
          delay,
        }}
      />
      <motion.ellipse
        cx="11.2674"
        cy="51.2386"
        rx="10.494"
        ry="3.75057"
        fill="white"
        fillOpacity="0.3"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          delay: delay + 0.2,
        }}
      />
    </motion.svg>
  );
}

export default Flag;
