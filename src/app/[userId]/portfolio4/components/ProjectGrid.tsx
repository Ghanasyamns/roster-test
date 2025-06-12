import { Project } from "@/data/types/users";
import Image from "next/image";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {projects.map((project) => (
        <div
          key={project.title}
          className="group relative overflow-hidden rounded-lg border border-border hover:border-primary transition-all"
        >
          <div className="relative aspect-video">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          <div className="p-4">
            <h4 className="font-semibold line-clamp-1">{project.title}</h4>
            <div className="flex flex-wrap gap-1 mt-2">
              {project.job_role.split(",").map((role, i) => (
                <span
                  key={i}
                  className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
                >
                  {role.trim()}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
