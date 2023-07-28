import dynamic from 'next/dynamic';

const Hero = dynamic(() => import("../components/Hero"), { ssr: false })  ;
const Profile = dynamic(() => import("./profile"), { ssr: false })  ;

import Data from "../data/projects.json";

export default function Home({props}) {

const data = props

  return (
    <>
      <Hero />
      <Profile isNav={false}/>
    </>
  );
}

Home.getInitialProps = () => {    
   return {
     props: {
       data: Data,
     },
   };
 };

