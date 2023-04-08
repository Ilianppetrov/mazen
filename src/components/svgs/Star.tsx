function Star({ fill = false }: { fill?: boolean }) {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.767 16.4635L19.957 23.2055L12.544 17.8175L17.767 16.4635ZM24.54 9.10351H15.375L12.545 0.382507L9.70504 9.10551L0.540039 9.09351L7.96204 14.4905L5.12204 23.2045L12.544 17.8175L17.127 14.4905L24.54 9.10351Z"
        fill={fill ? "#00945F" : "#00222E"}
      />
    </svg>
  );
}

export default Star;
