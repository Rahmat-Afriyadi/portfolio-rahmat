import dynamic from 'next/dynamic';

const Hero = dynamic(() => import("../components/Hero"), { ssr: false })  ;
const Profile = dynamic(() => import("./profile"), { ssr: false })  ;

export default function Home() {
  return (
    <>
      <Hero />
      <Profile isNav={false} />
    </>
  );
}
