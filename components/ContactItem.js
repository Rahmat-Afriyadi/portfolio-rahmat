import classnames from "classnames";
import Image from "next/image";

export default function ContactItem({ label, value, icon, className, link = "" }) {
  return (
    <a className={classnames("flex items-center cursor-pointer", className)} href={link}>
      <Image src={icon} alt={label} height="24" width="24" />
      <div className="ml-4">
        <div className="text-sm sm:text-sm font-medium">{label}</div>
        <div className="text-sm sm:text-lg font-semibold -mt-1">{value}</div>
      </div>
    </a>
  );
}
