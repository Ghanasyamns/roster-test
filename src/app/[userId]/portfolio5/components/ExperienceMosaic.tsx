import { Experience } from "@/data/types/users";
import ProjectCard from "./ProjectCard";
import { convertDate } from "@/lib/utils";

export default function ExperienceMosaic({
  experiences,
}: {
  experiences: Experience[];
}) {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-12 relative inline-block">
        <span className="relative z-10 px-4 bg-stone-50">Work Timeline</span>
        <span className="absolute left-0 top-1/2 w-full h-1 bg-gradient-to-r from-teal-300/50 via-coral-400/50 to-teal-300/50 -z-0"></span>
      </h2>

      <div className="space-y-24">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="grid grid-cols-1 lg:grid-cols-5 gap-8 group"
          >
            <div className="lg:col-span-2 relative">
              <div className="sticky top-24 space-y-4">
                <h3 className="text-2xl font-bold bg-white p-4 rounded-lg shadow-md border-l-4 border-teal-500">
                  {exp.employer_name}
                </h3>

                <div className="flex flex-wrap gap-2">
                  <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
                    {exp.job_title}
                  </span>
                  <span className="bg-coral-100 text-coral-800 px-3 py-1 rounded-full text-sm">
                    {exp.subscriber_count}
                  </span>
                </div>

                <p className="text-stone-600">{exp.job_summary}</p>

                <div className="text-sm text-stone-500">
                  {convertDate(exp.job_duration_start)} —{" "}
                  {convertDate(exp.job_duration_end)}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                {exp.projects?.map((project, i) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    index={i}
                  />
                ))}
                <div className="absolute -left-8 -top-8 -z-10 h-full w-full border-2 border-coral-300/50 rounded-xl group-hover:border-teal-300/50 transition-all duration-500"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
