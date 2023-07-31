import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });
const ProjectsSection = dynamic(() => import("../components/ProjectsSection"), { ssr: false });
import Data from "../components/data/projects.json";

export default function Projects({ props }) {
  const data = props;
  return (
    <>
      <Navbar heroHeight={0} notHome={false} />
      <ProjectsSection projectsData={data.data} />
      <footer className="text-sm tracking-wider text-gray-300 font-semibold text-center bg-[#2d253a] py-6 -mt-11">
        DESIGN BY RAHMAT
      </footer>
    </>
  );
}

Projects.getInitialProps = () => {
  return {
    props: {
      data: Data,
    },
  };
};
