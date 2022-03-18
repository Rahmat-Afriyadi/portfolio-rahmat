export default function SectionTitle({ left, children, black=false }) {
  return (
    <h2
      className={` text-2xl font-semibold font-mono${
        !left ? " text-center" : ""
      } ${black ? "text-black" : "text-white"}`}
    >
      {children}
    </h2>
  );
}
