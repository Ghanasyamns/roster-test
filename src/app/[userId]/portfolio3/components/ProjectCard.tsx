import { Project } from "@/data/types/users";
import Image from "next/image";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-transform hover:-translate-y-1">
      <div className="relative h-48">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>
      <div className="p-4">
        <h5 className="font-bold text-lg text-gray-800">{project.title}</h5>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.job_role.split(",").map((role, i) => (
            <span
              key={i}
              className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded text-xs font-medium"
            >
              {role.trim()}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
