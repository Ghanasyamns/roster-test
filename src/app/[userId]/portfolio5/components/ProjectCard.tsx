import { Project } from "@/data/types/users";
import Image from "next/image";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const rotation = index % 2 === 0 ? "rotate-1" : "-rotate-1";
  const delay = index * 100;

  return (
    <div
      className={`hover:-rotate-0 transition-all duration-300 hover:shadow-lg ${rotation}`}
    >
      <div className="bg-white p-1 rounded-lg border border-stone-200 h-full overflow-hidden">
        <div className="relative aspect-video">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
            <h4 className="text-white font-medium">{project.title}</h4>
          </div>
        </div>

        <div className="p-4">
          <div className="flex flex-wrap gap-2">
            {project.job_role.split(",").map((role, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 rounded-full"
                style={{
                  backgroundColor: i % 2 === 0 ? "#f0fdfa" : "#fff0f3",
                  color: i % 2 === 0 ? "#0d9488" : "#f87171",
                }}
              >
                {role.trim()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
