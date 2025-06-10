import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import EmployerDetails from "./EmployerDetails";
import ProjectCard from "./ProjectCard";
import type { Experience } from "@/data/users";

function Experience({ experience }: { experience: Experience[] }) {
  return (
    <div>
      <h2 className="text-lg lg:text-xl font-semibold mb-2 border-b border-b-gray-200 pb-2">
        My Expericence
      </h2>
      <div className="my-6 lg:my-10">
        <Accordion
          className="flex flex-col gap-4 w-full"
          type="single"
          collapsible
        >
          {experience.map((exp, index) => (
            <AccordionItem value={"item-" + index} key={index}>
              <AccordionTrigger>
                <EmployerDetails experience={exp} />
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 relative grid-rows-auto w-full">
                  {exp.projects.map((project, index) => (
                    <ProjectCard project={project} key={index} />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default Experience;
