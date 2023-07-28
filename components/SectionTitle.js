export default function SectionTitle({ left, children, black = true }) {
  return (
    <h2
      className={`text-2xl font-semibold font-mono${!left ? " text-center" : ""} ${
        black ? "text-white" : "text-black"
      }`}
    >
      {children}
    </h2>
  );
}
