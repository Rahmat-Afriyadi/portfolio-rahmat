import dynamic from "next/dynamic";
import { useEffect } from "react";

const Hero = dynamic(() => import("../components/Hero"), { ssr: false });
const Profile = dynamic(() => import("./profile"), { ssr: false });

export default function Home() {
  useEffect(() => {
    console.log("kurniia ganteng");
  }, []);

  return (
    <>
      <Hero />
      <Profile isNav={false} />
    </>
  );
}
