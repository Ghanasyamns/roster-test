import { Project } from "@/data/users";
import Image from "next/image";

function ProjectCard({ project }: { project: Project }) {
  const { thumbnail, title, job_role } = project;
  return (
    <div className="group w-full">
      <div className="w-full h-[150px] relative">
        <Image
          fill
          sizes="100%"
          loading="lazy"
          className="absolute  object-cover  rounded-lg"
          src={thumbnail}
          alt="icons"
        />
      </div>
      <h5 className="text-sm lg:text-lg font-medium  group-hover:underline line-clamp-1 mt-2">
        {title}
      </h5>
      <h6 className="text-sm  text-gray-600 ">{job_role} </h6>
    </div>
  );
}

export default ProjectCard;
