import classnames from "classnames";
import Image from "next/dist/client/image";

export default function ContactItem({ label, value, icon, className }) {
  return (
    <div className={classnames("flex items-start", className)}>
      <Image src={icon} alt={label} height="24" width="24" />
      <div className="ml-4">
        <div className="text-sm sm:text-sm font-semibold mb-1">{label}</div>
        <div className="text-sm sm:text-lg font-semibold">{value}</div>
      </div>
    </div>
  );
}
