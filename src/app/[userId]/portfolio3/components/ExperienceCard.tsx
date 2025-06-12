import { Experience } from "@/data/types/users";
import ProjectCard from "./ProjectCard";
import { convertDate } from "@/lib/utils";

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 transition-all hover:shadow-md">
      <div className="flex flex-wrap justify-between items-start gap-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-800">
            {experience.employer_name}
          </h3>
          <div className="flex flex-wrap items-center gap-2 mt-2">
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
              {experience.job_title}
            </span>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
              {experience.job_type}
            </span>
            <span className="text-gray-500 text-sm">
              {convertDate(experience.job_duration_start)} -{" "}
              {convertDate(experience.job_duration_end)}
            </span>
          </div>
          <p className="mt-4 text-gray-600">{experience.job_summary}</p>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg px-4 py-2">
          <span className="font-bold text-purple-800">
            {experience.subscriber_count}
          </span>
          <span className="text-purple-600 text-sm"> subscribers</span>
        </div>
      </div>

      <h4 className="mt-6 mb-4 font-semibold text-lg text-gray-700 flex items-center gap-2">
        Featured Projects
        <span className="bg-gray-200 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-xs">
          {experience.no_of_projects}
        </span>
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {experience.projects?.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
