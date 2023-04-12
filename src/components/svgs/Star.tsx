function Star({ fill = false }: { fill?: boolean }) {
  return (
    <svg
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={fill ? "#00945F" : "#00222E"}
        d="M13.9183 13.3712L15.6703 18.7648L9.73992 14.4544L13.9183 13.3712ZM19.3367 7.48321H12.0047L9.74072 0.506409L7.46872 7.48481L0.136719 7.47521L6.07432 11.7928L3.80232 18.764L9.73992 14.4544L13.4063 11.7928L19.3367 7.48321Z"
      />
    </svg>
  );
}

export default Star;
