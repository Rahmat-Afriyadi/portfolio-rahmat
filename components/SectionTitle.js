export default function SectionTitle({ left, children }) {
  return (
    <h2 
      className={`text-white text-2xl font-semibold font-mono${
        !left ? " text-center" : ""
      }`}
    >
      {children}
    </h2>
  );
}
