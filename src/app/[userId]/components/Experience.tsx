"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import EmployerDetails from "./EmployerDetails";
import ProjectCard from "./ProjectCard";
import type { Experience } from "@/data/types/users";
import ExperienceForm from "./ExperienceForm";
import { useState } from "react";
type Props = {
  experience: Experience[];
  userId: string;
};
function Experience({ experience, userId }: Props) {
  const [experiences, setExperiences] = useState<Experience[]>(experience);
  const handleAddExperience = async (newExperience: Experience) => {
    // Here you would typically make an API call to save to your backend
    try {
      const reposne = await fetch(`/api/users/${userId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newExperience),
      });
      const responseBody = await reposne.json();
      setExperiences(responseBody.data.experience);
    } catch (error) {
      console.log(error);
    }
  };
  const handleEditExperience = async (updatedExperience: Experience) => {
    try {
      const reposne = await fetch(`/api/users/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedExperience),
      });
      const responseBody = await reposne.json();
      setExperiences(responseBody.data.experience);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="flex justify-between mb-2 border-b border-b-gray-200 pb-2 w-full">
        <h2 className="text-lg lg:text-xl font-semibold ">My Expericence</h2>
        <ExperienceForm
          mode="add"
          onSubmit={(exp) => handleAddExperience(exp)}
        />
      </div>
      <div className="my-6 lg:my-10">
        <Accordion
          className="flex flex-col gap-4 w-full"
          type="single"
          collapsible
        >
          {experiences.map((exp, index) => (
            <AccordionItem value={"item-" + index} key={index}>
              <AccordionTrigger>
                <EmployerDetails
                  experience={exp}
                  handleEditExperience={handleEditExperience}
                />
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 relative grid-rows-auto w-full">
                  {exp.projects?.map((project, index) => (
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
