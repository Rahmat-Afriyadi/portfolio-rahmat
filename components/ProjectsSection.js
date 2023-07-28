import ProjectItem from "./ProjectItem";
import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";

const projectsData = require("../data/projects.json");

export default function SectionProjects({ projectsData }) {
  const data = projectsData;
  console.log("ini");
  return (
    <>
      <section className="" id="projects">
        <div className="w-full mx-auto px-10 2xl:px-0 bg-[#2d253a] pt-16 overflow-x-hidden">
          <SectionTitle>Projects</SectionTitle>
          <SectionParagraph>some projects i have completed</SectionParagraph>
          <div className="flex -mx-4 mt-20 flex-wrap">
            {data.map((element, index) => {
              let a = index % 2 == 0 ? 0 : 1;
              const image_url = "/images/projects/" + element.image;
              return (
                <div key={index} className="w-full px-4 pb-8">
                  <ProjectItem
                    key={index}
                    name={element.title}
                    image={element.image}
                    description={element.description}
                    index={index}
                    date={element.date}
                    order={a}
                  />
                  <hr key={index} className="mt-7 mb-12"></hr>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
